const BeastSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	ADD_10_HP: Modifier.ADD_10_HP,
	INCREASE_DEFENSE: Modifier.INCREASE_DEFENSE,
	CONTEXT_BONUS: Modifier.CONTEXT_BONUS,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
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
