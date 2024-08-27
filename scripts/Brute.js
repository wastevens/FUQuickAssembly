const BruteCustomizations = {
	NOOP: {
		name: "Select a Customization",
		apply: function() {}
	},
	ADD_10_HP: {
		name: "Add 10 HP",
		apply: function() { npc.bonusHp += 10; }
	},
	COLLATERAL_DAMAGE: {
		name: "Collateral Damage (special rule)",
		apply: function() { }
	},
	DIE_HARD: {
		name: "Die Hard (special rule)",
		apply: function() { }
	},
	SPECIAL_ARMOR: {
		name: "Special Armor (special rule)",
		apply: function() { }
	},
	VENGEFUL_ATTACK: {
		name: "Vengeful Attack (special rule)",
		apply: function() { }
	}
}

const BruteSkills = {
	NOOP: {
		name: "Select a Skill",
		apply: function() {}
	},
	IMMUNE_STATUS: {
		name: "Immune to shaken and slow",
		apply: function() { }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { }
	},
	STATUS_RECOVERY: {
		name: "Normal Attack Mod: Status Recovery",
		apply: function() { }
	},
	STRONG_RANGED: {
		name: "Strong Attack Mod: Becomes ranged, uses [DEX + MIG], Targets suffer (Status)",
		apply: function() { }
	},
	COLLAPSE: {
		name: "Collapse (special rule) (Elites & Champions only)",
		apply: function() { }
	},
	ADD_SPELLS: {
		name: "Learn two spells (Elites & Champions only)",
		apply: function() { }
	},
	CRUSH: {
		name: "Envelop and Crush (unique action)",
		apply: function() { }
	},
	ENHANCING_GUARD: {
		name: "Enhancing Guard (special rule)",
		apply: function() { }
	},
	SORE_LOSER: {
		name: "Sore Loser (special rule)",
		apply: function() { }
	}
}
/**	
const BRUTE_SPELLS = {
	NOOP: {
		name: "Select a Spell",
		type: function() {}
	}
}

const BRUTE_SKILL_SPELLS = {
	NOOP: {
		name: "Select a Spell",
		type: function() {}
	},
	AREA_STATUS: {
		name: "Area Status",
		type: function() {}
	},
	CURSED_BREATH: {
		name: "Cursed Breath",
		type: function() {}
	},
	LIFE_THEFT: {
		name: "Life Theft",
		type: function() {}
	},
	POISON: {
		name: "Poison",
		type: function() {}
	},
	RAGE: {
		name: "Rage",
		type: function() {}
	}
}
**/

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
	
	levelUp(level) {
		$(".attack").remove();
		const accuracyBonus = Math.floor(level / 10);
		const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		
		const attack1 = new Attack();
		attack1.isMeleeOnly = false;
		attack1.name = "Normal Attack";
		attack1.attr1 = "DEX";
		attack1.attr2 = "MIG";
		attack1.accuracy = accuracyBonus;
		attack1.damage = 5 + damageBonus;
		attack1.extraDamage = false;
		attack1.mods = ["<b>Multi(2)</b>"];
		npc.attacks.push(attack1);
		
		const attack2 = new Attack();
		attack2.isMeleeOnly = true;
		attack2.name = "Strong Attack";
		attack2.attr1 = "MIG";
		attack2.attr2 = "MIG";
		attack2.accuracy = accuracyBonus;
		attack2.damage = 5 + damageBonus;
		attack2.extraDamage = true;
		attack2.mods = [];
		npc.attacks.push(attack2);
		
		npc.roleAffinityNotes = [];
		npc.roleAffinityNotes.push("Give this NPC two Vulnerabilities");
		npc.dex = 8;
		npc.ins = 6;
		npc.mig = 10;
		npc.wlp = 8;
		
		npc.level = level;
		
		if(level >= 10) {
			npc.roleAffinityNotes.push("Add two Resistances (not physical)");
		}
		if(level >= 20) {
			npc.ins = 8;
			npc.maxRoleSkills++;
		}
		if(level >= 30) {
			npc.roleAffinityNotes.push("Add one Immunity");
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