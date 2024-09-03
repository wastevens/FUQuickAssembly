const UndeadSkills = {
	NOOP_SKILL: Modifier.NOOP_SKILL,
	INCREASE_DEFENSE: Modifier.INCREASE_MDEFENSE,
	DARK_IMMUNITY_TO_ABSORBTION: Modifier.DARK_IMMUNITY_TO_ABSORBTION,
	POISON_SPELL: Modifier.POISON_SPELL,
	FLYING: Modifier.FLYING,
	ADD_ROLE_SKILL: Modifier.ADD_ROLE_SKILL
}

class Undead {
	constructor() {
	}

	apply() {
		npc.weakAffinityNotes.push("Vulnerability to <b>Light</b>");
		npc.strongAffinityNotes.push("Immunity to <b>Dark</b>");
		npc.strongAffinityNotes.push("Immunity to <b>Poison</b>");
		npc.light = "vu";
		npc.dark = "im";
		npc.poison = "im";
		npc.enabled = {
			physical: true,
			air: true,
			bolt: true,
			dark: false,
			earth: true,
			fire: true,
			ice: true,
			light: false,
			poison: false
		};
		
		npc.statusNotes.push("Immunity to the <b>poisoned</b> status");
		npc.statusNotes.push("Can be harmed by effects that restore Hit Points");
		
		npc.speciesSkillNote = "You may add an additional Vulnerability to (Air, Bolt, Earth, Fire, or Ice). If you do, add one Skill";
		npc.maxSpeciesSkills += 1;
	}
	
	skills() {
		return UndeadSkills;
	}
}