const ConstructSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	ADD_10_HP: Modifier.ADD_10_HP,
	CONTEXT_BONUS: Modifier.CONTEXT_BONUS,
	IMMUNITY_TWO_STATUS: Modifier.IMMUNITY_TWO_STATUS,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Construct {
	constructor() {
	}

	apply() {
		npc.strongAffinityNotes.push("Resistant to <b>Earth</b>");
		npc.strongAffinityNotes.push("Immunity to <b>poison</b>");
		npc.earth = "rs";
		npc.poison = "im";
		npc.enabled = {
			physical: true,
			air: true,
			bolt: true,
			dark: true,
			earth: false,
			fire: true,
			ice: true,
			light: true,
			poison: false
		};
		
		npc.statusNotes.push("Immunity to the <b>poisoned</b> status");
		
		npc.speciesSkillNote = "You may add an additional Vulnerability. If you do, add one Skill";
		npc.maxSpeciesSkills += 1;
	}
	
	skills() {
		return ConstructSkills;
	}
}