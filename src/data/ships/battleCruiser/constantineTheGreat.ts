import { enhancements, strategy } from '../../../enhancements/enhancements';
import { Manufacturer } from '../../../types/Manufacturer';
import { ResearchManufacturer } from '../../../types/ResearchManufacturer';
import { ResearchStrategyType } from '../../../types/ResearchStrategyType';
import { ResearchTacticType } from '../../../types/ResearchTacticType';
import { IShipDefinition, ISystemModule } from '../../../types/ShipDefinition';
import { ShipRow } from '../../../types/ShipRow';
import { ShipSource } from '../../../types/ShipSource';
import { ShipType, ShipSubType } from '../../../types/ShipType';
import { modules } from '../../modules';
import { ShipId } from '../../shipIds';

const m1: ISystemModule = {
    id: 'M1',
    name: 'ガンマストーム攻撃イオン砲システム',
    description: '対大型艦武装',
    category: 'M',
    categoryNumber: 1,
    defaultModule: true,
    skills: [
        enhancements.increaseIonDamage().withPercentageValue(10).withCost(5),
        enhancements.increaseIonDamage().withPercentageValue(10).withCost(5),
        enhancements.reduceCooldown().withPercentageValue(15).withCost(5),
        enhancements.reduceDuration().withPercentageValue(10).withCost(5),
        enhancements.reduceCooldown().withPercentageValue(15).withCost(5),
        enhancements.increaseIonHitRate().withPercentageValue(10).withCost(5),
        enhancements.increaseHitRateVsLarge().withPercentageValue(15).withCost(5),
        enhancements.increaseSystemHp().withPercentageValue(35).withCost(5),
        enhancements.reduceCritialDamageReceived().withPercentageValue(30).withCost(5),
    ],
    skillSlots: 6,
    parts: [{
        text: [
            'CI-2x700T型「ヘリウムフラッシュ」2連超重イオン砲塔',
            '対大型艦：',
            '・直射、エネルギー、対艦：9000、攻城：1890',
        ],
    }],
};

const m2: ISystemModule = {
    id: 'M2',
    name: 'ガンマストーム投射攻撃システム',
    description: '対大型艦武装',
    category: 'M',
    categoryNumber: 2,
    // TODO skills
    skillSlots: 6,
    parts: [{
        text: [
            'CT-2x600型「ガンマストーム」エネルギー魚雷発射システム',
            '対大型艦：',
            '・投射、エネルギー、対艦：9600、攻城：1344'
        ],
    }],
};

const a1: ISystemModule = {
    id: 'A1',
    name: 'ガンマストーム投射武器システム',
    description: '対大型艦武装',
    category: 'A',
    categoryNumber: 1,
    defaultModule: true,
    skills: [
        strategy.concentrateFirePeriodically(80, 90, 15).withCost(25),
        enhancements.increaseDamage().withPercentageValue(10).withCost(12),
        enhancements.increaseDamage().withPercentageValue(10).withCost(12),
        enhancements.increaseCriticalDamageAndChance().withPercentageValue(50).withCost(12),
        enhancements.reduceCooldown().withPercentageValue(15).withCost(12),
        enhancements.increaseHitRateVsLarge().withPercentageValue(15).withCost(12),
        enhancements.increaseHitRateVsSmall().withPercentageValue(15).withCost(10),
    ],
    skillSlots: 6,
    parts: [{
        text: [
            'CM-8x608A型「ガンマストーム」通常ミサイル発射システム',
            '対大型艦：',
            '・投射、実弾、対艦：24000、攻城：1920',
        ],
    }],
};

const a2: ISystemModule = {
    id: 'A2',
    name: 'ガンマストーム投射武器システム',
    description: '対艦武装',
    parts: [{
        text: [
            'CM-8x608型「ガンマストーム」パルスエネルギーミサイル発射システム',
            '対大型艦：',
            '・投射、エネルギー、対艦：18162、攻城：1816'
        ],
    }],
    category: 'A',
    categoryNumber: 2,
    // TODO skills
    // TODO skillslot
};

const b1: ISystemModule = {
    id: 'B1',
    name: '通常砲システム',
    description: '対小型＆対空武装',
    parts: [{
        text: [
            '350mm-CG-1350型　対艦2連砲',
            '対小型：',
            '・投射、実弾、対艦：8571、攻城：1371',
            'CG-1160B型　通常砲',
            '対空：',
            '・投射、実弾、対艦：3000、対空：720、攻城：90、反撃対空',
        ],
    }],
    category: 'B',
    categoryNumber: 1,
    skills: [
        enhancements.increaseDamage().withPercentageValue(10).withCost(8),
        enhancements.increaseDamage().withPercentageValue(10).withCost(8),
        enhancements.reduceCooldown().withPercentageValue(15).withCost(8),
        enhancements.reduceCooldown().withPercentageValue(15).withCost(8),
        enhancements.increaseHitRateVsAircraft().withPercentageValue(15).withCost(8),
    ],
    skillSlots: 4,
};

const b2: ISystemModule = {
    id: 'B2',
    name: 'パルス対空システム',
    description: '対空武装、ミサイル迎撃',
    parts: [{
        text: [
            'CP-3x220型　3連対空パルス砲',
            '対空：',
            '・直射、エネルギー、対艦：3150、対空：5744',
            'CP-120型　対ミサイルパルス群',
            '対空、ミサイル迎撃：',
            '・直射、エネルギー、対空：1788',
        ],
    }],
    category: 'B',
    categoryNumber: 2,
    // TODO skills
    // TODO skillslot
};

const b3: ISystemModule = {
    id: 'B3',
    name: '対空ミサイルシステム',
    description: '対空武装、ミサイル迎撃',
    parts: [{
        text: [
            'MK2-CM-4x200B型「ストーム」ミサイルランチャーネスト',
            '対空：',
            '・投射、実弾、対艦：2100、対空：7190',
            'CM-2x1888型　ミサイルランチャー群',
            '対空、ミサイル迎撃：',
            '・投射、実弾、対艦：1500、対空：3120',
        ],
    }],
    category: 'B',
    categoryNumber: 3,
    // TODO skills
    // TODO skillslot
};

const c1: ISystemModule = {
    id: 'C1',
    name: 'エネルギー圧縮装置',
    description: 'イオン砲ダメージアップ15％',
    category: 'C',
    categoryNumber: 1,
    // TODO skill
    skillSlots: 2,
    parts: [
        {
            text: [
                'RIT-650型　エネルギー圧縮装置',
                'エネルギーコア増強装置。高エネルギー出力密度を高めるのに効果的で、イオン武器の攻撃ダメージをアップさせる。',
            ],
        },
    ],
};

const c2: ISystemModule = {
    id: 'C2',
    name: '戦闘機搭載ハンガー',
    description: '小～中型戦闘機を2機搭載可能',
    parts: [
        {
            text: [
                'XAC-2000型　航空ブリッジ',
                'CBF-200型　中型格納庫',
            ],
        },
    ],
    category: 'C',
    categoryNumber: 2,
    carryFighter: 2,
    carryFighterType: ShipSubType.MEDIUM_FIGHTER,
    // TODO skill
    // TODO skillslots
};

const c3: ISystemModule = {
    id: 'C3',
    name: '戦術UAVシステム',
    description: 'スポッターＵＡＶ×3',
    parts: [
        {
            text: [
                'CIT-1型　スポッターUAV格納庫',
                '周囲の味方艦船に総合的な武器情報支援を提供し、武器の命中率をアップさせる。',
            ],
        },
    ],
    category: 'C',
    categoryNumber: 3,
    // TODO skill
    // TODO skillslots
};

const d1: ISystemModule = {
    id: 'D1',
    name: '近接対空システム',
    description: '対空武装',
    parts: [{
        text: [
            'CM-2x45B型　近接対空ミサイル',
            '対空：',
            '・投射、実弾、対空：5275、反撃対空',
        ],
    }],
    category: 'D',
    categoryNumber: 1,
    // TODO skills
    // TODO skillslot
};

const d2: ISystemModule = {
    id: 'D2',
    name: 'ターゲット保護システム',
    description: 'メインシステムへのクリティカルダメージ軽減60％',
    parts: [
        {
            text: [
                'ASM-220型　重点強化装甲',
                '艦船メイン武器システムの被クリティカルダメージ60％ダウン',
            ],
        },
    ],
    category: 'D',
    categoryNumber: 2,
    // TODO skills
    // TODO skillslots
};

const d3: ISystemModule = {
    id: 'D3',
    name: '損失管理システム',
    description: '自己補修ＵＡＶ',
    parts: [
        {
            text: [
                'AST-50型　ダメージ管理システム',
                '艦船の損傷状態を把握すると同時に、補修ロボットを送り出して自身の緊急補修を行うことができる。',
            ],
        },
    ],
    category: 'D',
    categoryNumber: 3,
    // TODO skills
    // TODO skillslots
};

const staticModules: ISystemModule[] = [
    modules.propulsionSystem({
        skills: [
            enhancements.increaseCruisingSpeed().withPercentageValue(15).withCost(6),
            enhancements.increaseCruisingSpeed().withPercentageValue(15).withCost(6),
            enhancements.increaseWarpSpeed().withPercentageValue(15).withCost(6),
            enhancements.increaseWarpSpeed().withPercentageValue(15).withCost(6),
        ],
        skillSlots: 3,
    }),
];

export const constantineTheGreat: IShipDefinition[] = [
    {
        id: ShipId.CONSTANTINE_THE_GREAT,
        name: 'コンスタンティヌス級',
        type: ShipType.BATTLE_CRUISER,
        cost: 35,
        weight: 2,
        row: ShipRow.MIDDLE,
        operationLimit: 6,
        source: ShipSource.TECH_FILE,
        manufacturer: Manufacturer.ANTONIOS_CONSORTIUM,
        researchManufacturer: ResearchManufacturer.ANTONIOS_CONSORTIUM,
        researchStrategyTypes: [ResearchStrategyType.OUTSTANDING_FIREPOWER],
        researchTacticTypes: [ResearchTacticType.DIRECT_FIRE_WEAPONS],
        modules: [m1, m2, a1, a2, b1, b2, b3, c1, c2, c3, d1, d2, d3, ...staticModules],
    },
];
