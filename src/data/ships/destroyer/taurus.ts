import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IShipDefinition } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType } from '../../../types/ShipType';
import { ShipId } from '../../shipIds';

export const taurus: IShipDefinition[] = [
    {
        id: ShipId.TAURUS_A,
        name: 'トーラス級　Ａ攻撃型',
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 5,
        row: ShipRow.FRONT,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.NOMA_SHIPPING_GROUP,
        researchManufacturer: ResearchManufacturer.NOMA_SHIPPING_GROUP,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.SUSTAINED_COMBAT],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        subModelIds: [ShipId.TAURUS_B, ShipId.TAURUS_C],
        relatedShipIds: [ShipId.TAURUS_TE_A_S, ShipId.TAURUS_TE_B_S],
        // defaultStats: {
        //     hp: 36040,
        // },
    },
    {
        id: ShipId.TAURUS_B,
        name: 'トーラス級　Ｂ突撃型',
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 5,
        row: ShipRow.FRONT,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.NOMA_SHIPPING_GROUP,
        researchManufacturer: ResearchManufacturer.NOMA_SHIPPING_GROUP,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER, ResearchStrategyType.SUSTAINED_COMBAT],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        baseModelId: ShipId.TAURUS_A,
        relatedShipIds: [ShipId.TAURUS_C, ShipId.TAURUS_TE_A_S, ShipId.TAURUS_TE_B_S],
        // defaultStats: {
        //     hp: 40030,
        // },
    },
    {
        id: ShipId.TAURUS_C,
        name: 'トーラス級　Ｃ防護型',
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 5,
        row: ShipRow.FRONT,
        operationLimit: 10,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.NOMA_SHIPPING_GROUP,
        researchManufacturer: ResearchManufacturer.NOMA_SHIPPING_GROUP,
        researchStrategyTypes: [ResearchStrategyType.SUSTAINED_COMBAT, ResearchStrategyType.STRATEGY_AND_SUPPORT],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        baseModelId: ShipId.TAURUS_A,
        relatedShipIds: [ShipId.TAURUS_B, ShipId.TAURUS_TE_A_S, ShipId.TAURUS_TE_B_S],
        // defaultStats: {
        //     hp: 40030,
        // },
    },
    {
        id: ShipId.TAURUS_TE_A_S,
        name: 'トーラス級-TE　Ａ対艦型（回収）',
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 5,
        row: ShipRow.FRONT,
        operationLimit: 10,
        source: ShipSource.SALVAGE,
        manufacturer: Manufacturer.NOMA_SHIPPING_GROUP,
        relatedShipIds: [ShipId.TAURUS_A, ShipId.TAURUS_B, ShipId.TAURUS_C, ShipId.TAURUS_TE_B_S],
    },
    {
        id: ShipId.TAURUS_TE_B_S,
        name: 'トーラス級-TE　Ｂ突撃型（回収）',
        type: ShipType.DESTROYER,
        cost: 8,
        weight: 5,
        row: ShipRow.FRONT,
        operationLimit: 10,
        source: ShipSource.SALVAGE,
        manufacturer: Manufacturer.NOMA_SHIPPING_GROUP,
        relatedShipIds: [ShipId.TAURUS_A, ShipId.TAURUS_B, ShipId.TAURUS_C, ShipId.TAURUS_TE_A_S],
    },
];
