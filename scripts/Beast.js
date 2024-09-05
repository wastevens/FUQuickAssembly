const BeastSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	ADD_10_HP: Modifier.ADD_10_HP,
	CONTEXT_BONUS: Modifier.CONTEXT_BONUS,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Beast {
	constructor() {
	}
	
	apply() {
		npc.maxSpeciesSkills += 2;
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
		return BeastSkills;
	}
}
