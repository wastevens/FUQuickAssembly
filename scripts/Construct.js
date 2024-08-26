const ConstructSkills = {
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
	STATUS_IMMUNITY: {
		name: "Immunity to two status effects",
		type: function() { npc.speciesSkills.push("STATUS_IMMUNITY"); },
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

class Construct {
	constructor() {
	}

	apply() {
		npc.resetSpecies();
		npc.speciesAffinityNotes.push("Resistant to <b>Earth</b>");
		npc.speciesAffinityNotes.push("Immunity to <b>poison</b>");
		npc.speciesAffinityNotes.push("Immunity to the <b>poisoned</b> status");
		npc.earth = "RS";
		npc.poison = "IM";
		
		npc.speciesSkillNotes = "You may give this NPC an additional Vulnerability. If you do, add one Skill";
		if ($(".speciesSkill").length == 0) {
			addSelection(0, ConstructSkills, "speciesSkill", "speciesSkills");
		}
	}
}