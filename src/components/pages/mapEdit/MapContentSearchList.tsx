import { useMemo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';
import { IMapContent, IMapData, IMarker, IPlanet, IStation } from './types/IMapContent';
import { SearchInput } from '../../searchInput/SearchInput';
import { t } from '../../../i18n';
import { formatStationLabelForList, matchMarker, matchPlanet, matchStation } from './utils/mapContentUtils';
import { useColorMode } from '../../../theme/context/ThemeProvider';

interface IProps {
    mapData: IMapData;
    currentMenu: string;
    menuItemIdPrefix: string;
    onClickItem: (event: React.MouseEvent<HTMLLIElement>) => void;
    onClickRemoveItem: (content: IMapContent) => void;
}

export const MapContentSearchList = (props: IProps) => {
    const { mapData, currentMenu, menuItemIdPrefix, onClickItem, onClickRemoveItem } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');
    const colorMode = useColorMode();

    const planets: IPlanet[] = useMemo(() => {
        if (currentMenu !== 'planets') {
            return [];
        }
        if (searchTerm.length === 0) {
            return mapData.planets;
        }
        return mapData.planets.filter(planet => matchPlanet(planet, searchTerm));
    }, [mapData, currentMenu, searchTerm]);

    const stations: IStation[] = useMemo(() => {
        if (currentMenu !== 'stations') {
            return [];
        }
        const searchableStations = mapData.stations.filter(station => station.type !== 'stronghold');
        if (searchTerm.length === 0) {
            return searchableStations;
        }
        return searchableStations.filter(station => matchStation(station, searchTerm));
    }, [mapData, currentMenu, searchTerm]);

    const markers: IMarker[] = useMemo(() => {
        if (currentMenu !== 'markers') {
            return [];
        }
        if (searchTerm.length === 0) {
            return mapData.marker;
        }
        return mapData.marker.filter(marker => matchMarker(marker, searchTerm));
    }, [mapData, currentMenu, searchTerm]);

    const smallMenu = document.body.getBoundingClientRect().width < 640;

    return (
        <Stack spacing={1}>
            <Box component="div" p={1}>
                <SearchInput
                    id="map-content-search"
                    value={searchTerm}
                    lowerCase={true}
                    onChange={setSearchTerm}
                />
            </Box>
            {(planets.length + stations.length + markers.length) > 0 ? (
                <MenuList
                    id="map-content-menu"
                    aria-labelledby="composition-button"
                    dense={true}
                    sx={{
                        height: smallMenu ? '25vh' : '60vh',
                        overflowY: 'auto',
                        paddingTop: 0,
                    }}
                >
                    {[
                        <Divider key="first-divider" />,
                        ...(planets.flatMap(planet => [
                            <MenuItem
                                key={planet.id}
                                id={menuItemIdPrefix + planet.id}
                                onClick={onClickItem}
                                disableGutters={true}
                            >
                                <ListItemText sx={{ padding: '0 6px' }}>
                                    {planet.name ?? planet.position}
                                </ListItemText>
                            </MenuItem>,
                            <Divider key={`divider_${planet.id}`} style={{ margin: 0 }} />
                        ])),
                        ...(stations.flatMap(station => [
                            <MenuItem
                                key={station.id}
                                id={menuItemIdPrefix + station.id}
                                onClick={onClickItem}
                                disableGutters={true}
                                sx={{ padding: 0 }}
                            >
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignSelf: 'stretch',
                                        alignItems: 'center',
                                        width: '30px',
                                        backgroundColor: colorMode.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{ fontSize: 'xx-small', color: 'text.secondary', }}
                                    >
                                        {station.level ? `Lv${station.level}` : null}
                                    </Box>
                                </Box>
                                <ListItemText sx={{ padding: '0 6px' }}>
                                    {formatStationLabelForList(station)}
                                </ListItemText>
                            </MenuItem>,
                            <Divider key={`divider_${station.id}`} style={{ margin: 0 }} />
                        ])),
                        ...(markers.map(marker => [
                            <MenuItem
                                key={marker.id}
                                id={menuItemIdPrefix + marker.id}
                                onClick={onClickItem}
                                disableGutters={true}
                            >
                                <ListItemText sx={{ padding: '0 6px' }}>
                                    {marker.label ?? marker.position}
                                </ListItemText>
                                <Divider orientation="vertical" flexItem />
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '36px',
                                    }}
                                >
                                    <ClearIcon onClick={e => {
                                        e.stopPropagation();
                                        onClickRemoveItem(marker)
                                    }} />
                                </Box>
                            </MenuItem>,
                            <Divider key={`divider_${marker.id}`} style={{ margin: 0 }} />
                        ]))
                    ]}
                </MenuList>
            ) : (
                <Box
                    component="div"
                    p={2}
                    sx={{
                        height: smallMenu ? '25vh' : '60vh',
                    }}
                >
                    <Typography variant="body1" color="text.secondary">
                        {t('mapEdit.noContent')}
                    </Typography>
                </Box>
            )}
        </Stack>
    );
};