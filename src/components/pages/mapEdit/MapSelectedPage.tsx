import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useMapData } from './hooks/useMapData';
import { StarSystem } from './3d/StarSystem';
import { LoadingIndicator } from '../../loading/LoadingIndicator';
import { MapEditDialog } from './MapEditDialog';
import { t } from '../../../i18n';
import { MapProviders } from './MapProviders';
import { routes } from '../../../utils/routes';
import { MapNavigatorBar } from './MapNavigatorBar';
import { MapTopRightBar } from './MapTopRightBar';
import { EditMapButton } from './EditMapButton';

const MapSelectedPage = () => {
    const {
        mode,
        mapUrl,
        queryResult,
        input,
        mapData,
        parseError,
        targetToMark,
        setMode,
        cancelEditMode,
        setInput,
        applyInput,
        validateInput,
        removeContent,
        markTarget,
    } = useMapData();

    const navigate = useNavigate();
    const handleClickExit = useCallback(() => {
        navigate(routes.map.path);
    }, [navigate]);

    if (!mapUrl) {
        return (
            <Alert severity="error">
                <AlertTitle>{t('mapEdit.invalidMap')}</AlertTitle>
            </Alert>
        );
    }

    if (queryResult.isLoading) {
        return (
            <LoadingIndicator />
        );
    }

    if (queryResult.isError) {
        return (
            <Alert severity="error">
                <AlertTitle>{t('label.error')}</AlertTitle>
                {`${queryResult.error}`}
            </Alert>
        );
    }

    return (
        <>
            {mapData && (
                <MapProviders mapData={mapData} targetToMark={targetToMark}>
                    <StarSystem mapData={mapData} />
                </MapProviders>
            )}
            <MapTopRightBar mode={mode} onExit={handleClickExit} setMode={setMode} />
            {mode === 'edit' && (
                <MapEditDialog
                    input={input}
                    setInput={setInput}
                    parseError={parseError}
                    onCancel={!!mapData ? cancelEditMode : handleClickExit}
                    onApply={applyInput}
                    onValidate={validateInput}
                />
            )}
            {mode === 'interactive' && mapData && (
                <>
                    <MapNavigatorBar mapData={mapData} onRemoveContent={removeContent} onMarkTarget={markTarget} />
                    <EditMapButton setMode={setMode} />
                </>
            )}
        </>
    );
};

export default MapSelectedPage;