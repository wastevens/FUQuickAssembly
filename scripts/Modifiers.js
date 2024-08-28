const Modifier = {
	NOOP_SKILL: {
		name: "Select a Skill",
		apply: function() {}
	},
	NOOP_CUSTOMIZATION: {
		name: "Select a Customization",
		apply: function() {}
	},
	// Brute Customizations
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
	},
	// Brute Skills
	IMMUNE_SHAKEN_SLOW: {
		name: "Immune to shaken and slow",
		apply: function() { npc.statusNotes.push("Immunity to the <b>shaken</b> and <b>slow</b> status effects"); }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { npc.attacks[0].mods.push("Targets Magic Defense"); }
	},
	STATUS_RECOVERY: {
		name: "Normal Attack Mod: Status Recovery",
		apply: function() { npc.attacks[0].mods.push("Status Recovery"); }
	},
	STRONG_RANGED: {
		name: "Strong Attack Mod: Becomes ranged, uses [DEX + MIG], Targets suffer (Status)",
		apply: function() { 
			npc.attacks[1].isMelee = false;
			npc.attacks[1].isRanged = true;
			npc.attacks[1].attr1 = "DEX";
			npc.attacks[1].attr2 = "MIG";
			npc.attacks[1].mods.push("Target suffers (Status)");
		}
	},
	COLLAPSE: {
		name: "Collapse (special rule) (Elites & Champions only)",
		apply: function() { }
	},
	ADD_BRUTE_SPELLS: {
		name: "Learn two spells (Elites & Champions only)",
		apply: function() { 
			npc.spellNote = "Magic Check is [MIG + WLP]"
			npc.maxSpells += 2; 
		}
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
	},
	// Hunter customizations
	LIFE_DRAIN: {
		name: "Normal Attack Mod: Life Drain",
		apply: function() { npc.attacks[0].mods.push("Life Drain"); }
	},
	EFFECTIVE_VS_STATUS: {
		name: "Normal Attack Mod: Effective vs Status",
		apply: function() { npc.attacks[0].mods.push("+5 Damage vs target with (Status)"); }
	},
	EMERGENCY_CAMO: {
		name: "Emergency Camouflage (special rule)",
		apply: function() {}
	},
	FALSE_SENSE_OF_SECURITY: {
		name: "False Sense of Security (special rule)",
		apply: function() {}
	},
	OPPORTUNIST: {
		name: "Opportunist (special rule)",
		apply: function() {}
	},
	// Hunter Skills
	IMMUNE_AFFINITY: {
		name: "Immune to one damage type",
		apply: function() { npc.roleAffinityNotes.push("Add one Immunity"); }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { npc.attacks[0].mods.push("Targets Magic Defense"); }
	},
	BONUS_VS_CONDITION: {
		name: "Normal Attack Mod: deals 5 extra damage against targets who are (condition)",
		apply: function() { npc.attacks[0].mods.push("+5 damage vs (Condition)"); }
	},
	OVERLOAD: {
		name: "Normal Attack Mod: Multi(2) and Overload",
		apply: function() { npc.attacks[0].mods.push("Multi(2)"); npc.attacks[0].mods.push("Overload"); }
	},
	TARGET_LOCK: {
		name: "Target Lock (unique action)",
		apply: function() {}
	},
	AMBUSH: {
		name: "Ambush (special rule)",
		apply: function() {}
	},
	HUNTERS_BAIT: {
		name: "Hunter's Bait (special rule)",
		apply: function() {}
	},
	DEADLY_COUNTER: {
		name: "Deadly Counter (special rule)",
		apply: function() {}
	},
	// Beast Skills
	INCREASE_DEFENSE: {
		name: "+2 to Defense and +1 to Magic Defense",
		apply: function() { 
			npc.def += 2; 
			npc.mdef += 1;
		}
	},
	CONTEXT_BONUS: {
		name: "+3 bonus to Opposed checks in favorable contexts",
		apply: function() { }
	},
	FLYING: {
		name: "Flying (pg 307 of Core Rulebook)",
		apply: function() {  }
	},
	ADD_ROLE_SKILL: {
		name: "An additional Role skill",
		apply: function() { 
			npc.maxRoleSkills++;
		}
	},
	IMMUNITY_TWO_STATUS: {
		name: "Immunity to two status effects",
		apply: function() { 
			npc.statusNotes.push("Immunity to <b>two</b> status effects");
		}
	},
}