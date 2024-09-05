const BruteCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_10_HP: Modifier.ADD_10_HP,
	BAD_TEMPER: Modifier.BAD_TEMPER,
	COLLATERAL_DAMAGE: Modifier.COLLATERAL_DAMAGE,
	DIE_HARD: Modifier.DIE_HARD,
	SPECIAL_ARMOR: Modifier.SPECIAL_ARMOR,
	VENGEFUL_ATTACK: Modifier.VENGEFUL_ATTACK
}

const BruteSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	IMMUNE_BRUTE_SKILL: Modifier.IMMUNE_BRUTE_SKILL,
	STRONG_ATTACK_RANGED: Modifier.STRONG_ATTACK_RANGED,
	COLLAPSE: Modifier.COLLAPSE,
	ADD_BRUTE_SPELLS: Modifier.ADD_BRUTE_SPELLS,
	CRUSH: Modifier.CRUSH,
	ENHANCING_GUARD: Modifier.ENHANCING_GUARD,
	SORE_LOSER: Modifier.SORE_LOSER,
	STEADY_RECOVERY: Modifier.STEADY_RECOVERY
}

const BruteSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	AREA_STATUS: Spell.AREA_STATUS,
	CURSE_XL: Spell.CURSE_XL,
	CURSED_BREATH: Spell.CURSED_BREATH,
	ENRAGE: Spells.ENRAGE,
	LIFE_THEFT: Spell.LIFE_THEFT,
	REINFORCE: Spell.REINFORCE
}

class Brute {
	constructor() {
	}
	
	apply() {
		npc.bonusHp += 10;
	}
	
	customizations() {
		return BruteCustomizations;
	}
	
	skills() {
		return BruteSkills;
	}
	
	spells() {
		return BruteSpells;
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
		attack1.mods = ["**Multi(2)**"];
		npc.attacks.push(attack1);
		
		const attack2 = new Attack();
		attack2.isMelee = true;
		attack1.isRanged = false;
		attack2.name = "Strong Attack";
		attack2.attr1 = "MIG";
		attack2.attr2 = "MIG";
		attack2.accuracy = accuracyBonus;
		attack2.damage = 5 + damageBonus;
		attack2.extraDamage = true;
		attack2.mods = [];
		npc.attacks.push(attack2);
		
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add two Vulnerabilities");
		npc.dex = 8;
		npc.ins = 6;
		npc.mig = 10;
		npc.wlp = 8;
		
		npc.level = level;
		
		if(level >= 10) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 20) {
			npc.ins = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.IMMUNE_AFFINITY.apply();
		}
		if(level >= 40) {
			npc.mig = 12;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			npc.bonusHp += 10;
		}
		if(level >= 60) {
			npc.wlp = 10;
			npc.maxRoleSkills++;
		}
	}
}