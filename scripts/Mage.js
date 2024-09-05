const MageCustomizations = {
	NOOP_CUSTOMIZATION: Modifier.NOOP_CUSTOMIZATION,
	IMMUNE_AFFINITY: Modifier.IMMUNE_AFFINITY,
	COLLATERAL_DAMAGE: Modifier.COLLATERAL_DAMAGE,
	OVERWHELM: Modifier.OVERWHELM,
	SOUL_BURST: Modifier.SOUL_BURST
}

const MageSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	IMMUNITY_TWO_MAGE_STATUS: Modifier.IMMUNITY_TWO_MAGE_STATUS,
	ADD_TWO_RESISTANCE: Modifier.ADD_TWO_RESISTANCE,
	NORMAL_ATTACK_MP_RECOVERY: Modifier.NORMAL_ATTACK_MP_RECOVERY,
	NORMAL_ATTACK_VOLATILE: Modifier.NORMAL_ATTACK_VOLATILE,
	ADD_MAGE_SPELLS: Modifier.ADD_MAGE_SPELLS,
	ELEMENT_DRAIN: Modifier.ELEMENT_DRAIN,
	ELEMENT_SHIFT: Modifier.ELEMENT_SHIFT,
	MAGICAL_MASTERY: Modifier.MAGICAL_MASTERY
}

const MageSpells = {
	NOOP_SPELL: Spell.NOOP_SPELL,
	ADD_10_MP: Spell.ADD_10_MP,
	BREATH: Spell.BREATH,
	CURSED_BREATH: Spell.CURSED_BREATH,
	DEVESTATION: Spell.DEVESTATION,
	FLARE: Spell.FLARE,
	GLACIES: Spell.GLACIES,
	IGNIS: Spell.IGNIS,
	LIFE_THEFT: Spell.LIFE_THEFT,
	LUX: Spell.LUX,
	MIND_THEFT: Spell.MIND_THEFT,
	TERRA: Spell.TERRA,
	THUNDERBOLT: Spell.THUNDERBOLT,
	UMBRA: Spell.UMBRA,
	VENTUS: Spell.VENTUS
}

class Mage {
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
		npc.def += 1;
		npc.mdef += 2;
		npc.maxSpells += 2; 
	}
	
	customizations() {
		return MageCustomizations;
	}
	
	skills() {
		return MageSkills;
	}
	
	spells() {
		return MageSpells;
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
			Modifier.NORMAL_ATTACK_TARGET_MDEF.apply();
		}
		if(level >= 20) {
			npc.ins = 10;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			Modifier.ADD_TWO_RESISTANCE.apply();
		}
		if(level >= 40) {
			npc.mig = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 50) {
			Modifier.IMMUNE_AFFINITY.apply();
		}
		if(level >= 60) {
			npc.wlp = 12;
			npc.maxRoleSkills++;
		}
	}
}