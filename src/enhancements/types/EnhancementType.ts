export enum EnhancementType {
    SKILL = 'skill',
    STRATEGY = 'strategy',
    FLAGSHIP_EFFECT = 'flagshipEffect',
}

export enum EnhancementSubType {
    INCREASE_ARMOR = 'increaseArmor',
    INCREASE_SHIELD = 'increaseShield',
    INCREASE_HP = 'increaseHp',
    INCREASE_SYSTEM_HP = 'increaseSystemHp',
    INCREASE_SYSTEM_HP_MAIN_SYSTEM = 'increaseSystemHpMainSystem',
    INCREASE_DAMAGE = 'increaseDamage',
    INCREASE_DAMAGE_OF_AIRCRAFT = 'increaseDamageOfAircraft',
    INCREASE_DAMAGE_OF_AIRCRAFT_MAIN_WEAPON = 'increaseDamageOfAircraftMainWeapon',
    INCREASE_DAMAGE_OF_CORVETTE = 'increaseDamageOfCorvette',
    INCREASE_DAMAGE_OF_UAV = 'increaseDamageOfUav',
    INCREASE_DAMAGE_VS_AIRCRAFT = 'increaseDamageVsAircraft',
    INCREASE_ION_DAMAGE = 'increaseIonDamage',
    INCREASE_ION_DAMAGE_OF_SHIP = 'increaseIonDamageOfShip',
    INCREASE_MISSILE_DAMAGE = 'increaseMissileDamage',
    INCREASE_MISSILE_AND_TORPEDO_DAMAGE = 'increaseMissileAndTorpedoDamage',
    INCREASE_SIEGE_DAMAGE = 'increaseSiegeDamage',
    INCREASE_SIEGE_DAMAGE_OF_AIRCRAFT = 'increaseSiegeDamageOfAircraft',
    INCREASE_CRITICAL_DAMAGE = 'increaseCriticalDamage',
    INCREASE_CRITICAL_DAMAGE_AND_CHANCE = 'increaseCriticalDamageAndChance',
    INCREASE_ENERGY_DAMAGE_OF_MAIN_SYSTEM = 'increaseEnergyDamageOfMainSystem',
    INCREASE_HIT_RATE = 'increaseHitRate',
    INCREASE_HIT_RATE_OF_MAIN_WEAPON = 'increaseHitRateOfMainWeapon',
    INCREASE_HIT_RATE_OF_ALL_WEAPONS = 'increaseHitRateOfAllWeapons',
    INCREASE_HIT_RATE_OF_AIRCRAFT = 'increaseHitRateOfAircraft',
    INCREASE_HIT_RATE_OF_AIRCRAFT_MAIN_WEAPON = 'increaseHitRateOfAircraftMainWeapon',
    INCREASE_HIT_RATE_OF_CORVETTE = 'increaseHitRateOfCorvette',
    INCREASE_HIT_RATE_OF_UAV = 'increaseHitRateOfUav',
    INCREASE_HIT_RATE_VS_SMALL = 'increaseHitRateVsSmall',
    INCREASE_HIT_RATE_VS_LARGE = 'increaseHitRateVsLarge',
    INCREASE_HIT_RATE_VS_AIRCRAFT = 'increaseHitRateVsAircraft',
    INCREASE_ION_HIT_RATE = 'increaseIonHitRate',
    INCREASE_MISSILE_AND_TORPEDO_HIT_RATE = 'increaseMissileAndTorpedoHitRate',
    INCREASE_CRUISING_SPEED = 'increaseCruisingSpeed',
    INCREASE_CRUISING_SPEED_OF_AIRCRAFT = 'increaseCruisingSpeedOfAircraft',
    INCREASE_WARP_SPEED = 'increaseWarpSpeed',
    INCREASE_REPAIR_SPEED = 'increaseRepairSpeed',
    INCREASE_SUPPLY_SPEED = 'increaseSupplySpeed',
    INCREASE_STORAGE = 'increaseStorage',
    INCREASE_CUSTOM_MODULE_STORAGE = 'increaseCustomModuleStorage',
    INCREASE_PROJECTILE_HITRATE_MID_ROW = 'increaseProjectileHitRateMidRow',
    INCREASE_TORPEDO_HITRATE_MID_ROW = 'increaseTorpedoHitRateMidRow',
    INCREASE_MISSILE_HITRATE_MID_ROW = 'increaseMissileHitRateMidRow',
    INCREASE_MISSILE_AND_TORPEDO_HITRATE_BACK_ROW = 'increaseMissileAndTorpedoHitRateBackRow',
    INCREASE_INTERCEPTION_CHANCE = 'increaseInterceptionChance',
    INCREASE_EVASION = 'increaseEvasion',
    INCREASE_MISSILE_EVASION_OF_AIRCRAFT = 'increaseMissileEvasionOfAircraft',
    INCREASE_MISSILE_EVASION_OF_CORVETTE = 'increaseMissileEvasionOfCorvette',
    INCREASE_MISSILE_EVASION_OF_UAV = 'increaseMissileEvasionOfUav',
    INCREASE_SELF_HOST_CAPACITY = 'increaseSelfHostCapacity',
    INCREASE_PRODUCTION_SPEED = 'increaseProductionSpeed',
    INCREASE_ENEMY_LOCK_ON = 'increaseEnemyLockOn',
    INCREASE_LOCK_ON_EFFICIENCY = 'increaseLockOnEfficiency',
    INCREASE_STRATEGIC_STRIKE_ANGLE = 'increaseStrategicStrikeAngle',
    INCREASE_REPAIR_EFFECTIVENESS = 'increaseRepairEffectiveness',
    INCREASE_REPAIR_EFFECTIVENESS_BY_ARMOR = 'increaseRepairEffectivenessByArmor',
    INCREASE_MAINTENANCE_EFFICIENCY = 'increaseMaintenanceEfficiency',
    INCREASE_JAMMING_DURATION = 'increaseJammingDuration',
    REDUCE_LOCK_ON = 'reduceLockOn',
    REDUCE_LOCK_ON_OF_AIRCRAFT = 'reduceLockOnOfAircraft',
    REDUCE_LOCK_ON_OF_UAV = 'reduceLockOnOfUav',
    REDUCE_LOCK_ON_EFFICIENCY_CHANCE = 'reduceLockOnEfficiencyChance',
    REDUCE_COOLDOWN = 'reduceCooldown',
    REDUCE_COOLDOWN_OF_MAIN_SYSTEM = 'reduceCooldownOfMainSystem',
    REDUCE_ION_COOLDOWN_OF_SHIP = 'reduceIonCooldownOfShip',
    REDUCE_RTB_OF_AIRCRAFT = 'reduceRtbOfAircraft',
    REDUCE_RTB_OF_CORVETTE = 'reduceRtbOfCorvette',
    REDUCE_RTB_UAV = 'reduceRtbUav',
    REDUCE_DURATION = 'reduceDuration',
    REDUCE_ATTACK_INTERVAL = 'reduceAttackInterval',
    REDUCE_PREFAB_COST = 'reducePrefabCost',
    REDUCE_UE_COIN_COST = 'reduceUeCoinCost',
    REDUCE_DAMAGE_RECEIVED_BY_SYSTEM = 'reduceDamageReceivedBySystem',
    REDUCE_CRITICAL_DAMAGE_RECEIVED = 'reduceCritialDamageReceived',
    REDUCE_PROJECTILE_DAMAGE_RECEIVED = 'reduceProjectileDamageReceived',
    REDUCE_HIT_BY_MISSILE = 'reduceHitByMissile',
    REDUCE_HIT_BY_PROJECTILE = 'reduceHitByProjectile',
    REDUCE_HIT_BY_PROJECTILE_IN_BACK_ROW = 'reduceHitByProjectileInBackRow',
    REDUCE_HIT_BY_PROJECTILE_IN_MID_ROW = 'reduceHitByProjectileInMidRow',
    REDUCE_HIT_BY_TORPEDO_IN_BACK_ROW = 'reduceHitByTorpedoInBackRow',
    REDUCE_HIT_BY_MISSILE_IN_BACK_ROW = 'reduceHitByMissileInBackRow',
    REDUCE_HIT_BY_SLOW_IN_BACK_ROW = 'reduceHitBySlowInBackRow',
    REDUCE_HIT_BY_MISSILE_AND_TORPEDO = 'reduceHitByMissleAndTorpedo',
    REDUCE_HIT_BY_DIRECT_FIRE = 'reduceHitByDirectFire',
    REDUCE_HIT_BY_SLOW = 'reduceHitBySlow',
    REDUCE_MISSILE_INTERCEPTION = 'reduceMissileInterception',
    REDUCE_TORPEDO_INTERCEPTION = 'reduceTorpedoInterception',
    REDUCE_EVASION = 'reduceEvasion',
    REDUCE_HIT_RATE_OF_MAIN_WEAPON = 'reduceHitRateOfMainWeapon',
    REDUCE_BAT_OF_AIRCRAFT = 'reduceBatOfAircraft',
    REDUCE_FLIGHT_TIME = 'reduceFlightTime',
    REDUCE_FLIGHT_TIME_AND_WEAPON_COOLDOWN_OF_AIRCRAFT = 'reduceFlightTimeAndWeaponCooldownOfAircraft',
    REDUCE_FLIGHT_TIME_AND_PRIMARY_WEAPON_COOLDOWN_OF_AIRCRAFT = 'reduceFlightTimeAndPrimaryWeaponCooldownOfAircraft',
    REDUCE_PRE_TARGET_TIME = 'reducePreTargetTime',
    DISGUISE_AS_DESTROYER = 'disguiseAsDestroyer',
    DISGUISE_AS_CARRIER = 'disguiseAsCarrier',
    CUSTOM_MODULE_STORAGE = 'customModuleStorage',
    REPAIR_QUEUE = 'repairQueue',
    SPECIAL_AMMO = 'specialAmmo',
    COLLATERAL_DAMAGE = 'collateralDamage',
    MISSILE_TRACKING_RADAR = 'missileTrackingRadar',
    ACTIVE_ANTI_MISSILE_INTERCEPTION = 'activeAntiMissileInterception',
    FOCUS_FIRE = 'focusFire',
    FLEET_DOCK_1 = 'fleetDock1',
    FLEET_DOCK_2 = 'fleetDock2',
    SIEGE_TACTIC_2 = 'siegeTactic2',
    DESPERATE_MEASURES_1 = 'desperateMeasures1',
    DESPERATE_MEASURES_2 = 'desperateMeasures2',
    STRATEGIC_STRIKE_1 = 'strategicStrike1',
    STRATEGIC_STRIKE_2 = 'strategicStrike2',
    STRATEGIC_STRIKE_3 = 'strategicStrike3',
    ANTI_AIRCRAFT_NETWORK_1 = 'antiAircraftNetwork1',
    ANTI_AIRCRAFT_NETWORK_2 = 'antiAircraftNetwork2',
    OVERDRIVE = 'overdrive',
    PRIORITIZE_FIREPOWER = 'prioritizeFirepower',
    PRECISION_STRIKE = 'precisionStrike',
    HEAVY_AMMO = 'heavyAmmo',
    LIGHT_AMMO = 'lightAmmo',
    ANTI_AIRCRAFT_SUPPORT = 'antiAircraftSupport',
    ANTI_AIRCRAFT_MEASURES = 'antiAircraftMeasures',
    RAPID_FIRE = 'rapidFire',
    TARGET_RESET_1 = 'targetReset1',
    TARGET_RESET_2 = 'targetReset2',
    CONCENTRATE_FIRE_PERIODICALLY = 'concentrateFirePeriodically',
    EVASIVE_MANEUVERS = 'evasiveManeuvers',
    SUPER_CAPITAL_STRIKE = 'superCapitalStrike',
    PRIORITIZE_TARGETS = 'prioritizeTargets',
    ACTIVE_INTERFERENCE = 'activeInterference',
    FOCUSED_ATTACKS = 'focusedAttacks',
    SUSTAINED_DAMAGE_OUTPUT = 'sustainedDamageOutput',
    INFORMATION_CHAIN = 'informationChain',
    ALL_SHIPS_FOCUS_FIRE = 'allShipsFocusFire',
    PRIORITIZE_SUPPORT = 'prioritizeSupport',
    PRIORITIZE_SUPPORT_2 = 'prioritizeSupport2',
    WEAK_POINT_STRIKE = 'weakPointStrike',
    CLOSE_COMBAT_ASSAULT_1 = 'closeCombatAssault1',
    CLOSE_COMBAT_ASSAULT_2 = 'closeCombatAssault2',
    SPEED_UP_REPAIR = 'speedUpRepair',
    KEY_TARGETS = 'keyTargets',
    PURSUE_TARGETS = 'pursueTargets',
    CONCENTRATED_STRIKE = 'concentratedStrike',
    CUSTOM = 'custom',
}
