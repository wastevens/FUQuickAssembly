const SentinelCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_TWO_RESISTANCE: Modifier.ADD_TWO_RESISTANCE,
	COVER: Modifier.COVER,
	INTERCEPT: Modifier.INTERCEPT,
	VULNERABILITY_BLOCK: Modifier.VULNERABILITY_BLOCK,
	UNWAVERING_SUPPORT: Modifier.UNWAVERING_SUPPORT
}

const SentinelSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	NORMAL_ATTACK_SOLO_MULTI_2: Modifier.NORMAL_ATTACK_SOLO_MULTI_2,
	STRONG_ATTACK_ON_STATUS_CLEARS_SPELL: Modifier.STRONG_ATTACK_ON_STATUS_CLEARS_SPELL,
	ADD_SENTINEL_SPELLS: Modifier.ADD_SENTINEL_SPELLS,
	BARRICADE: Modifier.BARRICADE,
	AVENGE: Modifier.AVENGE,
	IMPROVED_AVENGE: Modifier.IMPROVED_AVENGE,
	REASSURING_AURA: Modifier.REASSURING_AURA
}

const SentinelSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	BREATH: Spell.BREATH,
	LICK_WOUNDS: Spell.LICK_WOUNDS,
	SHELL: Spell.SHELL,
	WAR_CRY: Spell.WAR_CRY
}

class Sentinel {
	constructor() {
	}
	
	apply() {
		npc.def += 2;
		npc.mdef += 1;
	}
	
	customizations() {
		return SentinelCustomizations;
	}
	
	skills() {
		return SentinelSkills;
	}
	
	spells() {
		return SentinelSpells;
	}
	
	levelUp(level) {
		$(".attack").remove();
		const accuracyBonus = Math.floor(level / 10);
		const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		
		const attack1 = new Attack();
		attack1.isMelee = true;
		attack1.isRanged = true;
		attack1.name = "Normal Attack";
		attack1.attr1 = "DEX";
		attack1.attr2 = "MIG";
		attack1.accuracy = accuracyBonus;
		attack1.damage = 5 + damageBonus;
		attack1.extraDamage = false;
		attack1.mods.push("Hit target suffers (choose one: dazed, shaken, slow, weak).");
		npc.attacks.push(attack1);
		
		const attack2 = new Attack();
		attack2.isMelee = true;
		attack1.isRanged = true;
		attack2.name = "Strong Attack";
		attack2.attr1 = "DEX";
		attack2.attr2 = "MIG";
		attack2.accuracy = accuracyBonus;
		attack2.damage = 5 + damageBonus;
		attack2.extraDamage = true;
		attack2.mods = [];
		npc.attacks.push(attack2);
		
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add two Vulnerabilities");
		npc.dex = 8;
		npc.ins = 8;
		npc.mig = 8;
		npc.wlp = 8;
		
		npc.level = level;
		
		if(level >= 10) {
			Modifier.INCREASE_DEFENSE.apply();
		}
		if(level >= 20) {
			npc.mig = 10;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.STRONG_ATTACK_IGNORES_RESISTANCE.apply();
		}
		if(level >= 40) {
			npc.wlp = 10;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			Modifier.IMMUNE_AFFINITY_NON_PHYSICAL.apply();
		}
		if(level >= 60) {
			npc.dex = 10;
			npc.maxRoleSkills++;
		}
	}
}