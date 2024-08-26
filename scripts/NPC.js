class Modifications {
	constructor() {
		this.rank = [];
		this.speciesSkills = [[], [], [], [], [], [], []];
		this.role = [];
		this.spells = [];
		this.roleSkills = [[], [], [], [], [], [], [], [], [], []];
		this.customizations = [[]];
		this.level = [];
	}
	
	resetSpeciesSkills() {
		this.speciesSkills = [[], [], [], [], [], [], []];
	}
	
	resetRole() {
		this.role = [];
	}
	
	resetCustomizations() {
		this.customizations = [[]];
	}
	
	resetRoleSkills() {
		this.roleSkills = [[], [], [], [], [], [], [], [], [], []];
	}
}

class Attack {
	constructor() {
		this.isMeleeOnly = false;
		this.name = "";
		this.attr1 = "";
		this.attr2 = "";
		this.accuracy = 0;
		this.baseDamage = 5;
		this.extraDamage = false;
		this.mods = [];
	}
	
	display() {
		const attackRow = $("<div>").addClass("row").addClass("attack");
		
		const glyphDiv = $("<div>").addClass("col-1").addClass("p-0").addClass("text-center");
		const meleeGlyph = $("<img>").attr("src", "glyphs/m-109.svg").css("height", "24px");
		const rangedGlyph = $("<img>").attr("src", "glyphs/r-114.svg").css("height", "24px");
		glyphDiv.append(meleeGlyph);
		if(!this.isMeleeOnly) {
			glyphDiv.append(" or ").append(rangedGlyph);
		}
		
		const basicDiv = $("<div>").addClass("col-5");
		const nameSpan = $("<span>").append(this.name);
		const accuracySpan = $("<span>").append("<b>[" + this.attr1 + " + " + this.attr2 + "]" + (this.accuracy != 0 ? " + " + this.accuracy : ""));
		const dmgSpan = $("<span>").append("<b>[HR + " + (this.baseDamage + (this.extraDamage ? 5 : 0)) +"]</b> (Type) damage");
		basicDiv.append(nameSpan).append(this._spaceSpan()).append(accuracySpan).append(this._spaceSpan()).append(dmgSpan);
		
		const modDiv = $("<div>").addClass("col");
		for(let i=0;i<this.mods.length-1;i++) {
			const spanMod = $("<span>").append(this.mods[i]);
			modDiv.append(spanMod).append(this._spaceSpan());
		}
		const spanMod = $("<span>").append(this.mods[this.mods.length-1]);
		modDiv.append(spanMod)
			
		attackRow.append(glyphDiv).append(basicDiv).append(modDiv);
		
		return attackRow;
	}
	
	_spaceSpan() {
		return $("<span>").addClass("p-0").append(" ").append($("<img>").attr("src", "glyphs/w-119.svg").css("height", "12px")).append(" ");
	}
}

class NPC {
	constructor() {
		this.rank = null;
		this.species = null;
		this.role = null;
		this.level = null;
	
		this.dex = null;
		this.ins = null;
		this.mig = null;
		this.wlp = null;
	
		this.hp = 0;
		this.mp = 0;
	
		this.def = 0;
		this.mdef = 0;
	
		this.physical = "";
		this.air = "";
		this.bolt = "";
		this.dark = "";
		this.earth = "";
		this.fire = "";
		this.ice = "";
		this.light = "";
		this.poison = "";
		
		this.roleAffinityNotes = [];
		this.speciesAffinityNotes = [];
		this.attacks = [];
		
		this.spellNote = "";
		this.spells = [];
		
		this.speciesSkillNote = "";
		this.speciesSkills = [];
		
		this.maxRoleSkills = 0;
		this.roleSkills = [];
		
		this.maxCustomizations = 0;
		this.customizations = [];
	}
	
	resetSpecies() {
		this.physical = "";
		this.air = "";
		this.bolt = "";
		this.dark = "";
		this.earth = "";
		this.fire = "";
		this.ice = "";
		this.light = "";
		this.poison = "";
		
		this.speciesAffinityNotes = [];
		this.speciesSkillNotes = "";
		this.speciesSkills = [];
		
		modifications.resetSpeciesSkills();
		$(".speciesSkill").remove();
	}
	
	resetRole() {
		this.dex = 0;
		this.ins = 0;
		this.mig = 0;
		this.wlp = 0;
		
		this.def = 0;
		this.mdef = 0;
		
		this.hp = 0;
		this.mp = 0;

		modifications.resetRole();
		modifications.resetCustomizations();
		modifications.resetRoleSkills();

		this.attacks = [];
		$(".attack").remove();
		this.roleAffinityNotes = [];
		
		this.maxCustomizations = 0;
		this.customizations = [];
		$(".customization").remove();
		
		this.maxRoleSkills = 0;
		this.roleSkills = [];
		$(".roleSkill").remove();
	}
	
	levelUp() {
		if(this.level && this.role) {
			this.role.levelUp(this.level);
		}
	}
	
	deriveHPandMP() {
		this.hp += (this.mig ? (5 * this.mig) : 0) + (this.level ? (2 * this.level) : 0);
		this.mp += (this.wlp ? (5 * this.wlp) : 0) + (this.level ? (1 * this.level) : 0);
	}
	
	apply(mods) {
		this.def = 0;
		this.mdef = 0;
		this.hp = 0;
		this.mp = 0;
		
		this.maxCustomizations = 0;
		this.maxRoleSkills = 0;
		
		mods.role.forEach(m => m());
		mods.level.forEach(m => m());
		
		npc.customizations = [];
		mods.customizations.forEach(m => m.forEach(n => n()));
		
		npc.roleSkills = [];
		mods.roleSkills.forEach(m => m.forEach(n => n()));
		
		npc.speciesSkills = [];
		mods.speciesSkills.forEach(m => m.forEach(n => n()));
				
		this.deriveHPandMP();
		
		//mods.rank.forEach(m => m());
	}
}