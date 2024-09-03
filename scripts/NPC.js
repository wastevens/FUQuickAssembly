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
		
		this.enabled = {
			physical: false,
			air: false,
			bolt: false,
			dark: false,
			earth: false,
			fire: false,
			ice: false,
			light: false,
			poison: false
		};
		
		this.weakAffinityNotes = [];
		this.strongAffinityNotes = [];
		this.attacks = [];
		
		this.spellNote = "";
		this.maxSpells = 0;
		this.spells = [];
		this.fixedSpells = [];
		
		this.speciesSkillNote = "";
		this.maxSpeciesSkills = 0;
		this.speciesSkills = [];
		
		this.maxRoleSkills = 0;
		this.roleSkills = [];
		
		this.maxCustomizations = 0;
		this.customizations = [];
		
		this.statusNotes = [];
		
		this.actions = [];
		this.notes = [];
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
	
	fabulatorExport() {
		const m = {}
		const attributes = {};
		attributes.dexterity = this.dex;
		attributes.insight = this.ins;
		attributes.might = this.mig;
		attributes.willpower = this.wlp;
		m.attributes = attributes;
		
		const affinities = {};
		affinities.physical = this.physical;
		affinities.air = this.air;
		affinities.bolt = this.bolt;
		affinities.dark = this.dark;
		affinities.earth = this.earth;
		affinities.fire = this.fire;
		affinities.ice = this.ice;
		affinities.light = this.light;
		affinities.poison = this.poison;
		m.affinities = affinities;
		
		const extra = {};
        extra.mDef = this.mdef;
		extra.def = this.def;
		extra.hp = this.bonusHp;
		extra.mp = this.bonusMp;
		m.extra = extra;
		
		m.actions = this.actions;
		m.notes = this.notes;
		
		m.name = "Lvl " + this.level + " " + this.rank.display() + " " + this.species.constructor.name  + " " + this.role.constructor.name;
		m.lvl = this.level;
		m.rank = this.rank.fabulatorExport();
		m.species = this.species.constructor.name;
		
		return m;
	}
}