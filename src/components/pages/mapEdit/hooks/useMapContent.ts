import { useCallback, useEffect, useMemo, useState } from 'react';
import { UseQueryResult } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { routes } from '../../../../utils/routes';
import { IMapContent, IParseMapContentError } from '../types/IMapContent';
import { parseMapContent } from '../utils/mapContentParser';
import { useQueryMapData } from './useQueryMapData';

type Mode = 'edit' | 'view';

interface IHookResult {
    mode: Mode;
    mapUrl: string | null;
    queryResult: UseQueryResult<string | null, unknown>;
    input: string;
    mapContent: IMapContent | null;
    parseError: IParseMapContentError | null;
    setEditMode: () => void;
    setInput: (input: string) => void;
    applyInput: () => void;
}

export const useMapContent = (): IHookResult => {
    const [searchParams, setSearchParams] = useSearchParams();
    const encodedMapUrl = searchParams.get('d');
    const mapUrl = useMemo<string | null>(() => encodedMapUrl ? window.atob(encodedMapUrl) : null, [encodedMapUrl]);
    const queryResult = useQueryMapData(mapUrl);

    const [mode, setMode] = useState<Mode>('view');
    const [input, setInput] = useState<string>('');
    const [lastValidMapContent, setLastValidMapContent] = useState<IMapContent | null>(null);
    const [parseError, setParseError] = useState<IParseMapContentError | null>(null);

    // update query parameter
    useEffect(() => {
        if (encodedMapUrl) {
            setSearchParams(routes.mapSelected.createSearchParams({
                d: encodedMapUrl,
                mode,
            }));
        }
    }, [encodedMapUrl, mode]);

    // apply loaded initial data
    useEffect(() => {
        if (queryResult.isSuccess && queryResult.data && lastValidMapContent === null && parseError === null) {
            setInput(queryResult.data);

            if (mode === 'view') {
                const [mapContent, parseError] = parseMapContent(queryResult.data);
                if (parseError) {
                    console.warn(`Failed to parse map content: ${parseError.message} (line: ${parseError.line})`);
                    setParseError(parseError);
                    setMode('edit');
                    return;
                }
                setLastValidMapContent(mapContent);
                return;
            }
        }
    }, [queryResult.isSuccess, queryResult.data, lastValidMapContent, parseError, mode]);

    // apply manual input
    const applyInput = useCallback(() => {
        const [mapContent, parseError] = parseMapContent(input);
        if (parseError) {
            console.warn(`Failed to parse map content: ${parseError.message} (line: ${parseError.line})`);
            setParseError(parseError);
            return;
        }
        setParseError(null);
        setLastValidMapContent(mapContent);
        setMode('view');
    }, [input]);

    const setEditMode = useCallback(() => {
        setMode('edit');
    }, []);

    return {
        mode,
        mapUrl,
        queryResult,
        input,
        mapContent: lastValidMapContent,
        parseError,
        setEditMode,
        setInput,
        applyInput,
    };
}
