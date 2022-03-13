import { useCallback, useState } from 'react';
import { IFleetSetup, ReinforcementType } from '../types/IFleetSetup';
import { IShipsForAddDialog } from '../types/IShipsForAddDialog';
import { IShipDefinition } from '../../../../types/ShipDefinition';
import { addSelectedShipsToFleetSetup, applyCountToShipInAddDialog, createShipsForAddDialog } from '../utils/shipAddDialogUtilts';
import { IUserSettings } from '../../../../userSettings/types/UserSettings';

interface IHookArguments {
    userSettings: IUserSettings;
    fleetSetup: IFleetSetup;
    reinforcementType: ReinforcementType | null;
    shipDefinitions: IShipDefinition[];
    setFleetSetup: (fleetSetup: IFleetSetup) => void;
}

interface IHookResult {
    shipsForAddDialog: IShipsForAddDialog | null;
    open: () => void;
    cancel: () => void;
    apply: () => void;
    setShipCount: (shipId: string, count: number) => void;
}

export const useShipsForAddDialog = (args: IHookArguments): IHookResult => {
    const { userSettings, fleetSetup, reinforcementType, shipDefinitions, setFleetSetup } = args;
    const [shipsForAddDialog, setShipsForAddDialog] = useState<IShipsForAddDialog | null>(null);

    const open = useCallback(() => {
        setShipsForAddDialog(createShipsForAddDialog(shipDefinitions, reinforcementType, fleetSetup));
    }, [reinforcementType, shipDefinitions, fleetSetup]);

    const cancel = useCallback(() => {
        setShipsForAddDialog(null);
    }, []);

    const apply = useCallback(() => {
        if (shipsForAddDialog) {
            setFleetSetup(addSelectedShipsToFleetSetup(shipsForAddDialog, fleetSetup, userSettings));
            setShipsForAddDialog(null);
        }
    }, [shipsForAddDialog, setFleetSetup, fleetSetup, userSettings]);

    const setShipCount = useCallback((shipId: string, count: number) => {
        setShipsForAddDialog((shipsForAddDialog: IShipsForAddDialog | null) => shipsForAddDialog ? applyCountToShipInAddDialog(shipId, count, shipsForAddDialog) : null);
    }, [userSettings]);

    return {
        shipsForAddDialog,
        open,
        cancel,
        apply,
        setShipCount,
    };
};
