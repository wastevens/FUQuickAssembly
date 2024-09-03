const MonsterSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	ADD_10_HP: Modifier.ADD_10_HP,
	INCREASE_DEFENSE: Modifier.INCREASE_DEFENSE,
	ADD_TWO_RESISTANCE: Modifier.ADD_TWO_RESISTANCE,
	BREATH_SPELL: Modifier.BREATH_SPELL,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Monster {
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
		return MonsterSkills;
	}
}
