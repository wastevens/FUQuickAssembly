const HumanoidSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	CONTEXT_BONUS: Modifier.CONTEXT_BONUS,
	ADD_TWO_RESISTANCE: Modifier.ADD_TWO_RESISTANCE,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Humanoid {
	constructor() {
	}
	
	apply() {
		npc.weakAffinityNotes.push("Vulnerability to one of <b>(Physical, Dark, Light, Poison)</b>");
		npc.maxSpeciesSkills += 3;
		npc.enabled = {
			physical: true,
			air: true,
			bolt: true,
			dark: true,
			earth: true,
			fire: true,
			ice: true,
			light: true,
			poison: true
		};
	}
	
	skills() {
		return HumanoidSkills;
	}
}
