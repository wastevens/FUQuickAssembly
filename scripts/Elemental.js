const ElementalSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	IMMUNITY_TO_ABSORBTION: Modifier.IMMUNITY_TO_ABSORBTION,
	BREATH_SPELL: Modifier.BREATH_SPELL,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Elemental {
	constructor() {
	}

	apply() {
		npc.strongAffinityNotes.push("Immunity to <b>poison</b>");
		npc.strongAffinityNotes.push("Immunity to <b>another</b> damage type");
		npc.poison = "im";
		npc.enabled = {
			physical: true,
			air: true,
			bolt: true,
			dark: true,
			earth: true,
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
		return ElementalSkills;
	}
}