const HunterCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_10_HP: Modifier.ADD_10_HP,
	NORMAL_ATTACK_LIFE_DRAIN: Modifier.NORMAL_ATTACK_LIFE_DRAIN,
	NORMAL_ATTACK_EFFECTIVE_VS_STATUS: Modifier.NORMAL_ATTACK_EFFECTIVE_VS_STATUS,
	EMERGENCY_CAMO: Modifier.EMERGENCY_CAMO,
	FALSE_SENSE_OF_SECURITY: Modifier.FALSE_SENSE_OF_SECURITY,
	OPPORTUNIST: Modifier.OPPORTUNIST
}

const HunterSkills = {
	NOOP: Modifier.NOOP_SKILL,
	IMMUNE_AFFINITY: Modifier.IMMUNE_AFFINITY,
	NORMAL_ATTACK_TARGET_MDEF: Modifier.NORMAL_ATTACK_TARGET_MDEF,
	NORMAL_ATTACK_BONUS_VS_CONDITION: Modifier.NORMAL_ATTACK_BONUS_VS_CONDITION,
	NORMAL_ATTACK_OVERLOAD: Modifier.NORMAL_ATTACK_OVERLOAD,
	TARGET_LOCK: Modifier.TARGET_LOCK,
	AMBUSH: Modifier.AMBUSH,
	HUNTERS_BAIT: Modifier.HUNTERS_BAIT,
	DEADLY_COUNTER: Modifier.DEADLY_COUNTER
}

class Hunter {
	constructor() {
	}
	
	apply() {
	}
	
	customizations() {
		return HunterCustomizations;
	}
	
	skills() {
		return HunterSkills;
	}
	
	spells() {
		return {};
	}
	
	levelUp(level) {
		npc.dex = 10;
		npc.ins = 8;
		npc.mig = 8;
		npc.wlp = 6;
		
		const accuracyBonus = Math.floor(level / 10);
		const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		npc.attacks.forEach(a => {
			a.accuracy = 3 + accuracyBonus;
			a.baseDamage = 5 + damageBonus;
		});
		
		const attack = new Attack();
		attack.isMelee = true;
		attack.isRanged = true;
		attack.name = "Normal Attack";
		attack.attr1 = "DEX";
		attack.attr2 = "INS";
		attack.accuracy = 3 + accuracyBonus;
		attack.damage = 5 + damageBonus;
		attack.extraDamage = true;
		attack.mods = [];
		npc.attacks.push(attack);	
		
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add one Vulnerability");
		
		if(level >= 10) {
			Modifier.NORMAL_ATTACK_IGNORES_RESISTANCE.apply();
		}
		if(level >= 20) {
			npc.wlp = 8;
			npc.roleSkillCount++;
		}
		if(level >= 30) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 40) {
			npc.dex = 12;
			npc.roleSkillCount++;
		}
		if(level >= 50) {
			npc.def += 2;
			npc.mdef += 1;
		}
		if(level >= 60) {
			npc.ins = 10;
			npc.roleSkillCount++;
		}
	}
}