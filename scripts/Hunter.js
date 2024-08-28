const HunterCustomizations = {
	NOOP: {
		name: "Select a Customization",
		apply: function() {}
	},
	ADD_10_HP: {
		name: "Add 10 HP",
		apply: function() { npc.bonusHp += 10; }
	},
	LIFE_DRAIN: {
		name: "Normal Attack Mod: Life Drain",
		apply: function() { npc.attacks[0].mods.push("Life Drain"); }
	},
	EFFECTIVE_VS_STATUS: {
		name: "Normal Attack Mod: Effective vs Status",
		apply: function() { npc.attacks[0].mods.push("+5 Damage vs target with (Status)"); }
	},
	SPECIAL_ARMOR: {
		name: "Emergency Camouflage (special rule)",
		apply: function() {}
	},
	VENGEFUL_ATTACK: {
		name: "False Sense of Security (special rule)",
		apply: function() {}
	},
	OPPORTUNIST: {
		name: "Opportunist (special rule)",
		apply: function() {}
	}
}

const HunterSkills = {
	NOOP: {
		name: "Select a Skill",
		apply: function() {}
	},
	IMMUNE_AFFINITY: {
		name: "Immune to one damage type",
		apply: function() { }
	},
	TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { npc.attacks[0].mods.push("Targets Magic Defense"); }
	},
	BONUS_VS_CONDITION: {
		name: "Normal Attack Mod: deals 5 extra damage against targets who are (condition)",
		apply: function() { npc.attacks[0].mods.push("+5 damage vs (Condition)"); }
	},
	OVERLOAD: {
		name: "Normal Attack Mod: Multi(2) and Overload",
		apply: function() { npc.attacks[0].mods.push("Multi(2)"); npc.attacks[0].mods.push("Overload"); }
	},
	TARGET_LOCK: {
		name: "Target Lock (unique action)",
		apply: function() {}
	},
	AMBUSH: {
		name: "Ambush (special rule)",
		apply: function() {}
	},
	HUNTERS_BAIT: {
		name: "Hunter's Bait (special rule)",
		apply: function() {}
	},
	DEADLY_COUNTER: {
		name: "Deadly Counter (special rule)",
		apply: function() {}
	}
}

class Hunter {
	constructor() {
	}
	
	apply() {
	}
	
	customizations() {
		return HunterCustomizations;
	}
	
	skills() {
		return HunterSkills;
	}
	
	spells() {
		return [];
	}
	
	levelUp(level) {
		npc.dex = 10;
		npc.ins = 8;
		npc.mig = 8;
		npc.wlp = 6;
		
		const accuracyBonus = Math.floor(level / 10);
		const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		npc.attacks.forEach(a => {
			a.accuracy = 3 + accuracyBonus;
			a.baseDamage = 5 + damageBonus;
		});
		
		const attack = new Attack();
		attack.isMelee = true;
		attack.isRanged = true;
		attack.name = "Normal Attack";
		attack.attr1 = "DEX";
		attack.attr2 = "INS";
		attack.accuracy = 3 + accuracyBonus;
		attack.damage = 5 + damageBonus;
		attack.extraDamage = true;
		attack.mods = [];
		npc.attacks.push(attack);	
		
		npc.roleAffinityNotes = [];
		npc.roleAffinityNotes.push("Give this NPC one Vulnerability");
		
		if(level >= 10) {
				npc.attacks[0].mods.push("Ignores Resistances");
		}
		if(level >= 20) {
			npc.wlp = 8;
			npc.roleSkillCount++;
		}
		if(level >= 30) {
			npc.roleAffinityNotes.push("Add two Resistances (not physical)");
		}
		if(level >= 40) {
			npc.dex = 12;
			npc.roleSkillCount++;
		}
		if(level >= 50) {
			npc.def += 2;
			npc.mdef += 1;
		}
		if(level >= 60) {
			npc.ins = 10;
			npc.roleSkillCount++;
		}
	}
}