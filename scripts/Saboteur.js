const SaboteurCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL,
	AURA_OF_UNEASE: Modifier.AURA_OF_UNEASE,
	ENTANGLE: Modifier.ENTANGLE,
	EXHAUSTING_COMPROMISE: Modifier.EXHAUSTING_COMPROMISE,
	HINDERING_SPECIALIST: Modifier.HINDERING_SPECIALIST,
	SYPHON_MIND: Modifier.SYPHON_MIND
}

const SaboteurSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	NORMAL_ATTACK_MULTI_2: Modifier.NORMAL_ATTACK_MULTI_2,
	NORMAL_ATTACK_TARGET_MDEF: Modifier.NORMAL_ATTACK_TARGET_MDEF,
	ADD_STRONG_ATTACK_SABOTEUR: Modifier.ADD_STRONG_ATTACK_SABOTEUR,
	STRONG_ATTACK_TARGET_MDEF: Modifier.STRONG_ATTACK_TARGET_MDEF,
	ADD_SABOTEUR_SPELLS: Modifier.ADD_SABOTEUR_SPELLS,
	CRUEL_HYPNOSIS: Modifier.CRUEL_HYPNOSIS,
	SECRET_TECHNIQUE: Modifier.SECRET_TECHNIQUE,
	PARTING_GIFT: Modifier.PARTING_GIFT,
	SHADOW_OF_DOUBT: Modifier.SHADOW_OF_DOUBT
}

const SaboteurSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	CURSE_XL: Spell.CURSE_XL,
	DISPEL: Spell.DISPEL,
	DRAIN_SPIRIT: Spell.DRAIN_SPIRIT,
	ENRAGE: Spell.ENRAGE,
	HALLUCINATION: Spell.HALLUCINATION,
	TORPOR: Spell.TORPOR,
	WEAKEN: Spell.WEAKEN
}

class Saboteur {
	constructor() {
	}
	
	apply() {
		npc.dex = 10;
		npc.ins = 8;
		npc.mig = 6;
		npc.wlp = 8;
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add one Vulnerability");
		
		npc.def += 1;
		npc.mdef += 2;
	}
	
	customizations() {
		return SaboteurCustomizations;
	}
	
	skills() {
		return SaboteurSkills;
	}
	
	spells() {
		return SaboteurSpells;
	}
	
	levelUp(level) {
		$(".attack").remove();
		const attack1 = new Attack();
		attack1.isMelee = true;
		attack1.isRanged = true;
		attack1.name = "Normal Attack";
		attack1.attr1 = "DEX";
		attack1.attr2 = "INS";
		attack1.extraDamage = false;
		attack1.mods.push("Each hit target loses 10 MP");
		attack1.mods.push("OR"); 
		attack1.mods.push("Each hit target suffers (Status). If (Status) is Poisoned or Enraged, add a Vulnerability.");
		npc.attacks.push(attack1);
		
		npc.level = level;
		
		if(level >= 10) {
			Modifier.INCREASE_ACCURACY.apply();
		}
		if(level >= 20) {
			npc.mig = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.NORMAL_ATTACK_IGNORES_RESISTANCE.apply();
		}
		if(level >= 40) {
			npc.ins = 10;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			Modifier.IMMUNE_AFFINITY.apply();
		}
		if(level >= 60) {
			npc.wlp = 10;
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