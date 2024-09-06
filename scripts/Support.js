const SupportCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL,
	ADVISE: Modifier.ADVISE,
	INSPIRE: Modifier.INSPIRE,
	VULNERABILITY_BLOCK: Modifier.VULNERABILITY_BLOCK
}

const SupportSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	NORMAL_ATTACK_MULTI_2: Modifier.NORMAL_ATTACK_MULTI_2,
	NORMAL_ATTACK_TARGET_MDEF: Modifier.NORMAL_ATTACK_TARGET_MDEF,
	NORMAL_ATTACK_INFLICT_STATUS: Modifier.NORMAL_ATTACK_INFLICT_STATUS,
	NORMAL_ATTACK_MP_RECOVERY: Modifier.NORMAL_ATTACK_MP_RECOVERY,
	IMPROVED_ADVISE: Modifier.IMPROVED_ADVISE,
	STRATEGIC_COMMAND: Modifier.STRATEGIC_COMMAND,
	FOLLOW_UP_ATTACK: Modifier.FOLLOW_UP_ATTACK,
	HEALING_AURA: Modifier.HEALING_AURA,
	MP_BATTERY: Modifier.MP_BATTERY,
	ONE_LAST_COMMAND: Modifier.ONE_LAST_COMMAND
}

const SupportSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	AURA: Spell.AURA,
	AWAKEN: Spell.AWAKEN,
	BARRIER: Spell.BARRIER,
	CLEANSE: Spell.CLEANSE,
	DIVINATION: Spell.DIVINATION,
	ELEMENTAL_SHROUD: Spell.ELEMENTAL_SHROUD,
	HEAL: Spell.HEAL,
	MIRROR: Spell.MIRROR,
	QUICKEN: Spell.QUICKEN,
	WAR_CRY: Spell.WAR_CRY
}

class Support {
	constructor() {
	}
	
	apply() {
		npc.dex = 8;
		npc.ins = 8;
		npc.mig = 6;
		npc.wlp = 10;
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add one Vulnerability");
		
		npc.spellNote = "Magic Check is [INS + WLP]"
		npc.maxSpells += 2; 
	}
	
	customizations() {
		return SupportCustomizations;
	}
	
	skills() {
		return SupportSkills;
	}
	
	spells() {
		return SupportSpells;
	}
	
	levelUp(level) {
		$(".attack").remove();
		const attack1 = new Attack();
		attack1.isMelee = true;
		attack1.isRanged = true;
		attack1.name = "Normal Attack";
		attack1.attr1 = "INS";
		attack1.attr2 = "WLP";
		attack1.extraDamage = false;
		npc.attacks.push(attack1);
		
		npc.level = level;
		
		if(level >= 10) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 20) {
			npc.ins = 10;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.INCREASE_MDEFENSE.apply();
		}
		if(level >= 40) {
			npc.mig = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			Modifier.IMMUNE_AFFINITY_NON_PHYSICAL.apply();
		}
		if(level >= 60) {
			npc.ins = 12;
			npc.maxRoleSkills++;
		}
	}
}