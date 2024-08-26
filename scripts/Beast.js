const BeastSkills = {
	NOOP: {
		name: "Select a Skill",
		apply: function() {},
		undo: function() {}
	},
	ADD_HP: {
		name: "Add 10 HP",
		apply: function() { npc.speciesSkills.push("ADD_HP"); npc.hp += 10; },
		undo: function() { npc.speciesSkills.pop(); npc.hp -= 10; }
	},
	INCREASE_DEFENSE: {
		name: "+2 to Defense and +1 to Magic Defense",
		apply: function() { npc.speciesSkills.push("INCREASE_DEFENSE"); npc.def += 2; npc.mdef += 1; },
		undo: function() { npc.speciesSkills.pop(); npc.def -= 2; npc.mdef -= 1; }
	},
	CONTEXT_BONUS: {
		name: "+3 bonus to Opposed checks in favorable contexts",
		apply: function() { npc.speciesSkills.push("CONTEXT_BONUS"); },
		undo: function() { npc.speciesSkills.pop(); }
	},
	FLYING: {
		name: "Flying (pg 307 of Core Rulebook)",
		apply: function() { npc.speciesSkills.push("FLYING"); },
		undo: function() { npc.speciesSkills.pop(); }
	},
	ADD_ROLE_SKILL: {
		name: "An additional Role skill",
		apply: function() { npc.speciesSkills.push("ADD_ROLE_SKILL"); },
		undo: function() { npc.speciesSkills.pop(); }
	}
}

class Beast {
	constructor() {
	}
	
	apply() {
		npc.resetSpecies();
		if ($(".speciesSkill").length == 0) {
			addSelection(0, BeastSkills, "speciesSkill", "speciesSkills");
			addSelection(1, BeastSkills, "speciesSkill", "speciesSkills");
		}
	}
}
