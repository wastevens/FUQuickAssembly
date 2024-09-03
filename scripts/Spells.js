class ExportSpell {
	constructor(name) {
		this.name = name;
		this.type = "";
		this.range = "melee";
		this.special = [];
		this.attr1 = "dexterity";
		this.attr2 = "dexterity";
		this.itemType = "spell";
		this.damagetype = "physical";
	}
}

const Spell = {
	NOOP_SPELL: {
		name: "Select a Spell",
		apply: function() {}
	},
	ADD_10_MP: {
		name: "Add 10 MP",
		apply: function() {
			npc.bonusMp += 10;
		}
	},
	AREA_STATUS: {
		name: "Area Status",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	AURA: {
		name: "Aura",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	AWAKEN: {
		name: "Awaken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}		
	},
	BARRIER: {
		name: "Barrier",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	BREATH: {
		name: "Breath",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	CLEANSE: {
		name: "Cleanse",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	CURSED_BREATH: {
		name: "Cursed Breath",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	CURSE_XL: {
		name: "Curse XL",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	DEVESTATION: {
		name: "Devestation (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Devestation"));
		}
	},	
	DISPEL: {
		name: "Dispel",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	DRAIN_SPIRIT: {
		name: "Drain Spirit",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	ELEMENTAL_SHROUD: {
		name: "Elemental Shroud",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},	
	ENRAGE: {
		name: "Enrage",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	FLARE: {
		name: "Flare (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Flare"));
		}
	},
	GLACIES: {
		name: "Glacias (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Glacies"));
		}
	},
	HALLUCINATION: {
		name: "Hallucination",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	HEAL: {
		name: "Heal",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}		
	},
	IGNIS: {
		name: "Ignis",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	LICK_WOUNDS: {
		name: "Lick Wounds",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	LIFE_THEFT: {
		name: "Life Theft",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	LUX: {
		name: "Lux",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	MIND_THEFT: {
		name: "Mind Theft",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	MIRROR: {
		name: "Mirror",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},	
	POISON: {
		name: "Poison",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	QUICKEN: {
		name: "Quicken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},	
	RAGE: {
		name: "Rage",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	SHELL: {
		name: "Shell",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	TERRA: {
		name: "Terra",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	THUNDERBOLT: {
		name: "Thunderbolt (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Thunderbolt"));
		}
	},
	TORPOR: {
		name: "Torpor",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	UMBRA: {
		name: "Umbra",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	VENTUS: {
		name: "Ventus",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	WAR_CRY: {
		name: "War Cry",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	},
	WEAKEN: {
		name: "Weaken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell(this.name));
		}
	}
}