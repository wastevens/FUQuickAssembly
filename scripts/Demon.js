const DemonSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	INCREASE_MDEFENSE: Modifier.INCREASE_MDEFENSE,
	RESISTANCE_TO_ABSORBTION: Modifier.RESISTANCE_TO_ABSORBTION,
	WEAKEN_SPELL: Modifier.WEAKEN_SPELL,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Demon {
	constructor() {
	}
	
	apply() {
		npc.speciesAffinityNotes.push("Resistant to <b>two</b> damage types");
		npc.maxSpeciesSkills += 1;
	}
	
	skills() {
		return DemonSkills;
	}
}
