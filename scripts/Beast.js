const BeastSkills = {
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
	FLYING: {
		name: "Flying (pg 307 of Core Rulebook)",
		apply: function() {  }
	},
	ADD_ROLE_SKILL: {
		name: "An additional Role skill",
		apply: function() { 
			npc.maxRoleSkills++;
		}
	}
}

class Beast {
	constructor() {
	}
	
	apply() {
		npc.maxSpeciesSkills += 2;
	}
	
	skills() {
		return BeastSkills;
	}
}
