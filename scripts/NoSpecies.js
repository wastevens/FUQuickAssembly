class NoSpecies {
	constructor() {
	}
	
	apply() {
		npc.speciesAffinityNotes = [];
		npc.speciesSkillNotes = "";
		npc.speciesSkills = [];
		
		modifications.resetSpeciesSkills();
		$(".speciesSkill").remove();
	}
	
	undo() {
	}
}