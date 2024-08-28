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
		this.bonusHp = 0
		this.mp = 0;
		this.bonusMp = 0
	
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
		this.maxSpells = 0;
		this.spells = [];
		
		this.speciesSkillNote = "";
		this.maxSpeciesSkills = 0;
		this.speciesSkills = [];
		
		this.maxRoleSkills = 0;
		this.roleSkills = [];
		
		this.maxCustomizations = 0;
		this.customizations = [];
	}
	
	update() {
		if(this.rank && this.species && this.role && this.level) {
			const source = this;
			
			this.species.apply();
			$("select.speciesSkill").each(function(i, s) {
				source._applyValue(s, source.species.skills(), source.speciesSkills);
			});
			
			this.role.apply();
			this.role.levelUp(this.level);
			
			$("select.customization").each(function(i, s) {
				source._applyValue(s, source.role.customizations(), source.customizations);
			});
			
			$("select.roleSkill").each(function(i, s) {
				source._applyValue(s, source.role.skills(), source.roleSkills);
			});
			
			$("select.spell").each(function(i, s) {
				source._applyValue(s, source.role.spells(), source.spells);
			});
			
			this.deriveHPandMP();
			
			this.rank.apply();
		}
	}
	
	_applyValue(select, collection, addTo) {
		let value = $(select).val();
		let applicable = collection[value];
		addTo.push(value);
		applicable.apply();
	}
	
	deriveHPandMP() {
		this.hp += (this.mig ? (5 * this.mig) : 0) + (this.level ? (2 * this.level) : 0) + this.bonusHp;
		this.mp += (this.wlp ? (5 * this.wlp) : 0) + (this.level ? (1 * this.level) : 0) + this.bonusMp;
	}
}