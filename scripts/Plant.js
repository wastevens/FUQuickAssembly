const PlantSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	ADD_10_HP: Modifier.ADD_10_HP,
	ADD_TWO_RESISTANCE: Modifier.ADD_TWO_RESISTANCE,
	POISON_SPELL: Modifier.POISON_SPELL,
	THORNS: Modifier.THORNS,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Plant {
	constructor() {
	}

	apply() {
		npc.weakAffinityNotes.push("Vulnerability to one of <b>(Air, Bolt, Fire, Ice)</b>");
		npc.statusNotes.push("Immunity to the <b>dazed, enraged, shaken</b> status");
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
		
		npc.maxSpeciesSkills += 1;
	}
	
	skills() {
		return PlantSkills;
	}
}