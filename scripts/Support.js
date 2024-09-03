const SupportCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	ADD_10_HP: Modifier.ADD_10_HP,
	ADVISE: Modifier.ADVISE,
	INSPIRE: Modifier.INSPIRE
}

const SupportSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	NORMAL_ATTACK_MULTI_2: Modifier.NORMAL_ATTACK_MULTI_2,
	NORMAL_ATTACK_INFLICT_STATUS: Modifier.NORMAL_ATTACK_INFLICT_STATUS,
	STRATEGIC_COMMAND: Modifier.STRATEGIC_COMMAND,
	FOLLOW_UP_ATTACK: Modifier.FOLLOW_UP_ATTACK,
	HEALING_AURA: Modifier.HEALING_AURA,
	MP_BATTERY: Modifier.MP_BATTERY,
	ONE_LAST_COMMAND: Modifier.ONE_LAST_COMMAND,
	REASSURING_LEADERSHIP: Modifier.REASSURING_LEADERSHIP,
	VULNERABILITY_BLOCK: Modifier.VULNERABILITY_BLOCK
}

const SupportSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	AURA: Spell.AURA,
	AWAKEN: Spell.AWAKEN,
	BARRIER: Spell.BARRIER,
	CLEANSE: Spell.CLEANSE,
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
		npc.spellNote = "Magic Check is [INS + WLP]"
		npc.def += 1;
		npc.mdef += 2;
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
		const accuracyBonus = Math.floor(level / 10);
		const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		
		const attack1 = new Attack();
		attack1.isMelee = true;
		attack1.isRanged = true;
		attack1.name = "Normal Attack";
		attack1.attr1 = "INS";
		attack1.attr2 = "WLP";
		attack1.accuracy = accuracyBonus;
		attack1.damage = 5 + damageBonus;
		attack1.extraDamage = false;
		npc.attacks.push(attack1);
		
		
		npc.roleAffinityNotes = [];
		npc.weakAffinityNotes.push("Add one Vulnerability");
		npc.dex = 8;
		npc.ins = 10;
		npc.mig = 6;
		npc.wlp = 8;
		
		npc.level = level;
		
		if(level >= 10) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 20) {
			npc.wlp = 10;
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
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 60) {
			npc.ins = 12;
			npc.maxRoleSkills++;
		}
	}
}