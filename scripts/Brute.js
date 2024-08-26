const BruteCustomizations = {
	NOOP: {
		name: "Select a Customization",
		apply: function() {},
		undo: function() {}
	},
	ADD_10_HP: {
		name: "Add 10 HP",
		apply: function() { npc.customizations.push("ADD_HP"); npc.hp += 10; },
		undo: function() { npc.customizations.pop(); npc.hp -= 10; }
	},
	COLLATERAL_DAMAGE: {
		name: "Collateral Damage (special rule)",
		apply: function() { npc.customizations.push("COLLATERAL_DAMAGE"); },
		undo: function() { npc.customizations.pop(); }
	},
	DIE_HARD: {
		name: "Die Hard (special rule)",
		apply: function() { npc.customizations.push("DIE_HARD"); },
		undo: function() { npc.customizations.pop(); }
	},
	SPECIAL_ARMOR: {
		name: "Special Armor (special rule)",
		apply: function() { npc.customizations.push("SPECIAL_ARMOR"); },
		undo: function() { npc.customizations.pop(); }
	},
	VENGEFUL_ATTACK: {
		name: "Vengeful Attack (special rule)",
		apply: function() { npc.customizations.push("VENGEFUL_ATTACK"); },
		undo: function() { npc.customizations.pop(); }
	}
}

const BruteSkills = {
	NOOP: {
		name: "Select a Skill",
		apply: function() {},
		undo: function() {}
	},
	IMMUNE_STATUS: {
		name: "Immune to shaken and slow",
		apply: function() { npc.roleSkills.push("IMMUNE_STATUS"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { npc.roleSkills.push("TARGET_MDEF"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	STATUS_RECOVERY: {
		name: "Normal Attack Mod: Status Recovery",
		apply: function() { npc.roleSkills.push("STATUS_RECOVERY"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	STRONG_RANGED: {
		name: "Strong Attack Mod: Becomes ranged, uses [DEX + MIG], Targets suffer (Status)",
		apply: function() { npc.roleSkills.push("STRONG_RANGED"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	COLLAPSE: {
		name: "Collapse (special rule) (Elites & Champions only)",
		apply: function() { npc.roleSkills.push("COLLAPSE"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	ADD_SPELLS: {
		name: "Learn two spells (Elites & Champions only)",
		apply: function() { npc.roleSkills.push("ADD_SPELLS"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	CRUSH: {
		name: "Envelop and Crush (unique action)",
		apply: function() { npc.roleSkills.push("CRUSH"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	ENHANCING_GUARD: {
		name: "Enhancing Guard (special rule)",
		apply: function() { npc.roleSkills.push("ENHANCING_GUARD"); },
		undo: function() { npc.roleSkills.pop(); }
	},
	SORE_LOSER: {
		name: "Sore Loser (special rule)",
		apply: function() { npc.roleSkills.push("SORE_LOSER"); },
		undo: function() { npc.roleSkills.pop(); }
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
		npc.resetRole();
		npc.role = this;
		
		modifications.role.push(function() {
			npc.hp += 10;
		});
		
		const attack1 = new Attack();
		attack1.isMeleeOnly = false;
		attack1.name = "Normal Attack";
		attack1.attr1 = "DEX";
		attack1.attr2 = "MIG";
		attack1.accuracy = 0;
		attack1.extraDamage = false;
		attack1.mods = ["<b>Multi(2)</b>"];
		npc.attacks.push(attack1);
		
		const attack2 = new Attack();
		attack2.isMeleeOnly = true;
		attack2.name = "Strong Attack";
		attack2.attr1 = "MIG";
		attack2.attr2 = "MIG";
		attack2.accuracy = 0;
		attack2.extraDamage = true;
		attack2.mods = [];
		npc.attacks.push(attack2);
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
		npc.attacks.forEach(a => {
			a.accuracy = accuracyBonus;
			a.baseDamage = 5 + damageBonus;
		});

		//----
		npc.roleAffinityNotes = [];
		npc.roleAffinityNotes.push("Give this NPC two Vulnerabilities");
		npc.dex = 8;
		npc.ins = 6;
		npc.mig = 10;
		npc.wlp = 8;
		modifications.resetRoleSkills();
		
		const prevLevel = Level[$("#level").data("prev")].type;
		if(prevLevel >= 50) {
			modifications.level.push(function() {
				npc.hp -= 10;
			});
		}
		//----
		
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
			modifications.level.push(function() {
				npc.hp += 10;
			});
		}
		if(level >= 60) {
			npc.wlp = 10;
			npc.maxRoleSkills++;
		}
	}
}