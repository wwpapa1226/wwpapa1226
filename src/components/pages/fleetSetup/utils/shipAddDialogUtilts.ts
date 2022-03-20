import { IShipDefinition } from '../../../../types/ShipDefinition';
import { IShipsForAddDialog } from '../types/IShipsForAddDialog';
import { IFleetSetup, ReinforcementType } from '../types/IFleetSetup';
import { IUserSettings } from '../../../../userSettings/types/UserSettings';
import { createShipSelection } from './fleetSetupUtils';
import { isPossessingShip } from '../../../../userSettings/utils/userSettingsUtils';
import { ShipType } from '../../../../types/ShipType';
import { ShipRow } from '../../../../types/ShipRow';
import { FilterKey, ShipFilterState } from '../../../filter/types/ShipFilterState';
import { shipDefinitions as allShipDefinitions } from '../../../../data/shipDefinitions';

export function createShipsForAddDialog(
    reinforcement: ReinforcementType | null,
    fleetSetup: IFleetSetup,
    userSettings: IUserSettings,
    filter: string | null,
): IShipsForAddDialog {
    const includedShipMap: Record<string, boolean> = {};
    fleetSetup.ships.forEach(ship => {
        includedShipMap[`${ship.shipDefinition.id}_${ship.reinforcement}`] = true;
    });

    const shipDefinitions = pickShipsForAddDialog(
        allShipDefinitions,
        reinforcement,
        fleetSetup.myListOnly,
        userSettings,
    );

    return {
        fleetSetup: {
            ...fleetSetup,
            ships: [
                ...fleetSetup.ships,
                ...shipDefinitions.flatMap((shipDefinition: IShipDefinition) => {
                    if (includedShipMap[`${shipDefinition.id}_${reinforcement}`]) {
                        return [];
                    }

                    return [
                        createShipSelection({
                            shipDefinition,
                            count: 0,
                            reinforcement,
                            userSettings,
                            maxReinforcement: fleetSetup.maxReinforcement,
                            temporary: true,
                        }),
                    ];
                }),
            ],
        },
        reinforcement,
        filter,
    };
}

function pickShipsForAddDialog(
    shipDefinitions: IShipDefinition[],
    reinforcement: ReinforcementType | null,
    myListOnly: boolean,
    userSettings: IUserSettings,
): IShipDefinition[] {
    const ships = shipDefinitions.filter(s => s.type !== ShipType.CORVETTE && s.type !== ShipType.FIGHTER);
    return (reinforcement === 'ally' || !myListOnly)
        ? ships
        : shipDefinitions.filter(s => isPossessingShip(s.id, userSettings));
}

export function addSelectedShipsToFleetSetup(shipsForAddDialog: IShipsForAddDialog): IFleetSetup {
    return {
        ...shipsForAddDialog.fleetSetup,
        ships: shipsForAddDialog.fleetSetup.ships.flatMap(ship => {
            if (!ship.temporary) {
                return [ship];
            }
            if (ship.count === 0) {
                return [];
            }
            return [{ ...ship, temporary: false }];
        }),
    };
}

export function filterShipForAddDialog(filterState: ShipFilterState, shipsForAddDialog: IShipsForAddDialog): IShipsForAddDialog {
    let result: IShipsForAddDialog = {
        ...shipsForAddDialog,
        fleetSetup: {
            ...shipsForAddDialog.fleetSetup,
            ships: shipsForAddDialog.fleetSetup.ships.filter(s => s.temporary === true),
        },
    };

    Object.keys(filterState).filter(filterKey => filterState[filterKey as FilterKey]).forEach(filterKey => {
        switch (filterKey) {
            case ShipRow.FRONT:
            case ShipRow.MIDDLE:
            case ShipRow.BACK: {
                result = {
                    ...result,
                    fleetSetup: {
                        ...result.fleetSetup,
                        ships: result.fleetSetup.ships.filter(s => s.shipDefinition.row === filterKey),
                    },
                };
                break;
            }
            case ShipType.CARRIER:
            case ShipType.BATTLE_CRUISER:
            case ShipType.CRUISER:
            case ShipType.DESTROYER:
            case ShipType.FRIGATE: {
                result = {
                    ...result,
                    fleetSetup: {
                        ...result.fleetSetup,
                        ships: result.fleetSetup.ships.filter(s => s.shipDefinition.type === filterKey),
                    },
                };
                break;
            }
        }
    });

    return result;
}
