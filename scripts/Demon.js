const DemonSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	RESISTANCE_TO_ABSORBTION: Modifier.RESISTANCE_TO_ABSORBTION,
	WEAKEN_SPELL: Modifier.WEAKEN_SPELL,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Demon {
	constructor() {
	}
	
	apply() {
		Modifier.ADD_TWO_RESISTANCE.apply();
		npc.maxSpeciesSkills += 1;
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
		return DemonSkills;
	}
}
