import { useState, useCallback, useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ICellContent, IGridData } from './types/IGridData';

interface IProps {
    id: string;
    x: number;
    y: number;
    content: ICellContent[];
    gridData: IGridData;
}

export const GridCellContent = (props: IProps) => {
    const { id, x, y, content, gridData } = props;

    const handleAddContent = () => {

    };

    return (
        <Box component="div" sx={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
            <Box component="div" sx={{ position: 'absolute', top: 0, left: 0, color: 'lightgrey', opacity: 0.1 }}>
                {`(${x}/${y})`}
            </Box>
            <Box component="div" sx={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                ABC
            </Box>
        </Box>
    );
};
