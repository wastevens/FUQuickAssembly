const HunterCustomizations = {
	NOOP: {
		name: "Select a Customization",
		type: function() {}
	},
	ADD_10_HP: {
		name: "Add 10 HP",
		type: function() { npc.hp += 10; }
	},
	COLLATERAL_DAMAGE: {
		name: "Normal Attack Mod: Life Drain",
		type: function() { npc.attacks[0].mods.push("Life Drain"); }
	},
	DIE_HARD: {
		name: "Normal Attack Mod: Effective vs Status",
		type: function() { npc.attacks[0].mods.push("+5 Damage vs target with (Status)"); }
	},
	SPECIAL_ARMOR: {
		name: "Emergency Camouflage (special rule)",
		type: function() {}
	},
	VENGEFUL_ATTACK: {
		name: "False Sense of Security (special rule)",
		type: function() {}
	},
	OPPORTUNIST: {
		name: "Opportunist (special rule)",
		type: function() {}
	}
}

const HunterSkills = {
	NOOP: {
		name: "Select a Skill",
		type: function() {}
	},
	IMMUNE_AFFINITY: {
		name: "Immune to one damage type",
		type: function() { }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		type: function() {}
	},
	BONUS_VS: {
		name: "Normal Attack Mod: deals 5 extra damage against targets who are (condition)",
		type: function() {}
	},
	OVERLOAD: {
		name: "Normal Attack Mod: Multi(2) and Overload",
		type: function() {}
	},
	TARGET_LOCK: {
		name: "Target Lock (unique action)",
		type: function() {}
	},
	AMBUSH: {
		name: "Ambush (special rule)",
		type: function() {}
	},
	HUNTERS_BAIT: {
		name: "Hunter's Bait (special rule)",
		type: function() {}
	},
	DEADLY_COUNTER: {
		name: "Deadly Counter (special rule)",
		type: function() {}
	}
}

class Hunter {
	constructor() {
	}
	
	changeTo() {
		npc.dex = 10;
		npc.ins = 8;
		npc.mig = 8;
		npc.wlp = 6;
		npc.def = 0;
		npc.mdef = 0;
	
		npc.attacks = [];
	
		npc.roleAffinityNotes = [];
		npc.roleAffinityNotes.push("Give this NPC one Vulnerability");
		
		npc.customizations = [];
		npc.roleSkills = [];
		
		npc.spellNote = "";
		npc.spellCount = 0;
		npc.spellsAvailable = [];
		npc.spells = [];
	}
	
	apply() {
		modifications.role.push(function() {
			const attack = new Attack();
			attack.isMeleeOnly = false;
			attack.name = "Normal Attack";
			attack.attr1 = "DEX";
			attack.attr2 = "INS";
			attack.accuracy = 3;
			attack.extraDamage = true;
			attack.mods = [];
			npc.attacks.push(attack);		
		});	
	}
	
	levelUp(level) {
		npc.roleAffinityNotes = [];
		npc.attacks[0].mods = [];
		
		modifications.level.push(function() {
			const accuracyBonus = Math.floor(level / 10);
			const damageBonus = Math.floor(accuracyBonus / 2) * 5;
			npc.attacks.forEach(a => {
				a.accuracy = 3 + accuracyBonus;
				a.baseDamage = 5 + damageBonus;
			});
		});
		
		npc.roleAffinityNotes.push("Give this NPC one Vulnerability");
		
		if(level >= 10) {
			modifications.level.push(function() {
				npc.attacks[0].mods.push("Ignores Resistances");
			});
		}
		if(level >= 20) {
			npc.wlp = 8;
			modifications.level.push(function() {
				npc.roleSkillCount++;
			});
		}
		if(level >= 30) {
			npc.roleAffinityNotes.push("Add two Resistances (not physical)");
		}
		if(level >= 40) {
			npc.dex = 12;
			modifications.level.push(function() {
				npc.roleSkillCount++;
			});
		}
		if(level >= 50) {
			modifications.level.push(function() {
				npc.def += 2;
				npc.mdef += 1;
			});
		}
		if(level >= 60) {
			npc.ins = 10;
			modifications.level.push(function() {
				npc.roleSkillCount++;
			});
		}
	}
	
	customizations(index) {
		const selectRow = $("<div>").addClass("row").addClass("customization");
		const selectDiv = $("<div>").addClass("col");
		const select = $("<select>");
		selectDiv.append(select);
		selectRow.append(selectDiv);
		Object.keys(HunterCustomizations).forEach(r => select.append($("<option>").attr("value", r).append(HunterCustomizations[r].name)));
		
		select.on('change', function (e) {
			npc.customizations[index] = this.value;
			modifications.customizations[index] = HunterCustomizations[this.value].type;
			update();
		});
		
		return selectRow;
	}
	
	skills(index) {
		const selectRow = $("<div>").addClass("row").addClass("roleSkill");
		const selectDiv = $("<div>").addClass("col");
		const select = $("<select>");
		selectDiv.append(select);
		selectRow.append(selectDiv);
		
		Object.keys(HunterSkills).forEach(r => select.append($("<option>").attr("value", r).append(HunterSkills[r].name)));
		
		select.on('change', function (e) {
			npc.roleSkills[index] = this.value;
			modifications.roleSkills[index] = HunterSkills[this.value].type;
			update();
		});
		
		return selectRow;
	}
	
	spells(index) {
		if(npc.spellsAvailable.length > 0) {
			const selectRow = $("<div>").addClass("row").addClass("spell");
			const selectDiv = $("<div>").addClass("col");
			const select = $("<select>");
			selectDiv.append(select);
			selectRow.append(selectDiv);
			npc.spellsAvailable.forEach(r => select.append($("<option>").attr("value", r).append(npc.spellsAvailable[r].name)));
			
			select.on('change', function (e) {
				npc.spells[index] = this.value;
				modifications.spells[index] = npc.spellsAvailable[this.value].type;
				update();
			});
			
			return selectRow;
		}
		return "";
	}
}