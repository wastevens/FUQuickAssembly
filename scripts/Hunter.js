const HunterCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL,
	EMERGENCY_CAMO: Modifier.EMERGENCY_CAMO,
	FALSE_SENSE_OF_SECURITY: Modifier.FALSE_SENSE_OF_SECURITY,
	LIGHTNING_FAST: Modifier.LIGHTNING_FAST,
	SPECIAL_RESISTANCE: Modifier.SPECIAL_RESISTANCE
}

const HunterSkills = {
	NOOP: Modifier.NOOP_SKILL,
	ADD_STRONG_ATTACK_HUNTER: Modifier.ADD_STRONG_ATTACK_HUNTER,
	STRONG_ATTACK_TARGET_MDEF: Modifier.STRONG_ATTACK_TARGET_MDEF,
	ADD_HUNTER_SPELLS: Modifier.ADD_HUNTER_SPELLS,
	AMBUSH: Modifier.AMBUSH,
	ELUSIVE: Modifier.ELUSIVE,
	HUNTERS_BAIT: Modifier.HUNTERS_BAIT,
	OPPORTUNIST: Modifier.OPPORTUNIST,
	TARGET_LOCK: Modifier.TARGET_LOCK,
}

const HunterSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	BREATH: Spell.BREATH,
	CURSED_BREATH: Spell.CURSED_BREATH,
	LICK_WOUNDS: Spell.LICK_WOUNDS,
	LIFE_THEFT: Spell.LIFE_THEFT,
	MIRROR: Spell.MIRROR
}

class Hunter {
	constructor() {
	}
	
	apply() {
		npc.dex = 10;
		npc.ins = 8;
		npc.mig = 8;
		npc.wlp = 6;
		
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add one Vulnerability");
	}
	
	customizations() {
		return HunterCustomizations;
	}
	
	skills() {
		return HunterSkills;
	}
	
	spells() {
		return HunterSpells;
	}
	
	levelUp(level) {
		const attack = new Attack();
		attack.isMelee = true;
		attack.isRanged = true;
		attack.name = "Normal Attack";
		attack.attr1 = "DEX";
		attack.attr2 = "INS";
		attack.extraDamage = true;
		attack.mods = ["Regain hp equal to half damage dealt", "OR", "Deal 5 extra damage against targets who meet (Condition)"];
		npc.attacks.push(attack);	
		
		if(level >= 10) {
			Modifier.INCREASE_ACCURACY.apply();
		}
		if(level >= 20) {
			npc.wlp = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.NORMAL_ATTACK_IGNORES_RESISTANCE.apply();
		}
		if(level >= 40) {
			npc.dex = 12;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 60) {
			npc.ins = 10;
			npc.maxRoleSkills++;
		}
	}
	
	magicAttr1() {
		return "insight";
	}
	
	magicAttr2() {
		return "will";
	}
}