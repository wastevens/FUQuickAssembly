const ConstructSkills = {
	NOOP: {
		name: "Select a Skill",
		apply: function() {}
	},
	ADD_HP: {
		name: "Add 10 HP",
		apply: function() { 
			npc.bonusHp += 10; 
		},
	},
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
	STATUS_IMMUNITY: {
		name: "Immunity to two status effects",
		type: function() { }
	},
	FLYING: {
		name: "Flying (pg 307 of Core Rulebook)",
		apply: function() { }
	},
	ADD_ROLE_SKILL: {
		name: "An additional Role skill",
		apply: function() { 
			npc.maxRoleSkills++;
		}
	}
}

class Construct {
	constructor() {
	}

	apply() {
		npc.speciesAffinityNotes.push("Resistant to <b>Earth</b>");
		npc.speciesAffinityNotes.push("Immunity to <b>poison</b>");
		npc.speciesAffinityNotes.push("Immunity to the <b>poisoned</b> status");
		npc.earth = "RS";
		npc.poison = "IM";
		
		npc.speciesSkillNote = "You may give this NPC an additional Vulnerability. If you do, add one Skill";
		npc.maxSpeciesSkills += 1;
	}
	
	skills() {
		return ConstructSkills;
	}
}