class Mod {
	constructor(name, effect) {
		this.name = name;
		this.effect = effect;
	}
}

const Modifier = {
	NOOP_CUSTOMIZATION: {
		name: "Select a Customization",
		apply: function() {}
	},
	NOOP_SKILL: {
		name: "Select a Skill",
		apply: function() {}
	},
	ADD_10_HP: {
		name: "Add 10 HP",
		apply: function() { npc.bonusHp += 10; }
	},
	ADD_BRUTE_SPELLS: {
		name: "Learn two spells (Elites & Champions only)",
		apply: function() { 
			npc.spellNote = "Magic Check is [MIG + WLP]"
			npc.maxSpells += 2; 
		}
	},
	ADD_MAGE_SPELLS: {
		name: "Learn two additional spells",
		apply: function() { 
			npc.maxSpells += 2; 
		}
	},
	ADD_SABOTEUR_SPELLS: {
		name: "Learn one additional spell and gain +10 MP",
		apply: function() { 
			npc.spellNote = "Magic Check is [INS + WLP]"
			npc.maxSpells += 1; 
			npc.bonusMp += 10;
		}
	},
	ADD_SENTINEL_SPELLS: {
		name: "Learn one additional spell and gain +10 MP",
		apply: function() { 
			npc.spellNote = "Magic Check is [MIG + WLP]"
			npc.maxSpells += 1; 
			npc.bonusMp += 10;
		}
	},
	ADD_ROLE_SKILL: {
		name: "An additional Role skill",
		apply: function() { 
			npc.maxRoleSkills++;
		}
	},
	ADD_TWO_RESISTANCE: {
		name: "Add two Resistances (not physical)",
		apply: function() {
			npc.strongAffinityNotes.push("Add two Resistances (not physical)");
		}
	},
	ADD_STRONG_ATTACK_SABOTEUR: {
		name: "Add Strong Attack",
		apply: function() {
			const accuracyBonus = Math.floor(npc.level / 10);
			const damageBonus = Math.floor(accuracyBonus / 2) * 5;
		
			const attack = new Attack();
			attack.isMelee = true;
			attack.isRanged = true;
			attack.name = "Strong Attack";
			attack.attr1 = "DEX";
			attack.attr2 = "INS";
			attack.accuracy = accuracyBonus;
			attack.damage = 5 + damageBonus;
			attack.extraDamage = false;
			attack.mods.push("Target cannot perform (choose one: Attack, Guard, Inventory, Objective, Spell, Skill) during the next turn");
			npc.attacks.push(attack);
		}
	},
	ADVISE: {
		name: "Advise (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}		
	},
	AMBUSH: {
		name: "Ambush (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	AVENGE: {
		name: "Avenge (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	BARRICADE: {
		name: "Barricade (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},	
	COLLAPSE: {
		name: "Collapse (special rule) (Elites & Champions only)",
		apply: function() {
			npc.notes.push(new Mod("Collapse (special rule)", ""));
		}
	},
	COLLATERAL_DAMAGE: {
		name: "Collateral Damage (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	CONTEXT_BONUS: {
		name: "+3 bonus to Opposed checks in favorable contexts",
		apply: function() {
			npc.notes.push(new Mod("Contextual Bonus", "+3 bonus to Opposed checks in favorable contexts"));
		}
	},
	COVER: {
		name: "Cover (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	CRUEL_HYPNOSIS: {
		name: "Cruel Hypnosis (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},	
	CRUSH: {
		name: "Crush (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},
	DARK_IMMUNITY_TO_ABSORBTION: {
		name: "Replace Dark Immunity with Absorption",
		apply: function() { 
			npc.strongAffinityNotes.push("Replace Dark Immunity with Absorption");
			npc.dark = "AB";
		}
	},
	DEADLY_COUNTER: {
		name: "Deadly Counter (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	DIE_HARD: {
		name: "Die Hard (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	ELEMENT_DRAIN: {
		name: "Element Drain (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	ELEMENT_SHIFT: {
		name: "Element Shift (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	EMERGENCY_CAMO: {
		name: "Emergency Camouflage (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	ENHANCING_GUARD: {
		name: "Enhancing Guard (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	ENTANGLE: {
		name: "Entangle (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	EXHAUSTING_COMPROMISE: {
		name: "Exhausting Compromise (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	FALSE_SENSE_OF_SECURITY: {
		name: "False Sense of Security (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	FOLLOW_UP_ATTACK: {
		name: "Follow-up Attack (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}	
	},
	FLYING: {
		name: "Flying (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	HEALING_AURA: {
		name: "Healing Aura (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	HINDERING_SPECIALIST: {
		name: "Hindering Specialist (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	HUNTERS_BAIT: {
		name: "Hunter's Bait (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	IMMUNE_AFFINITY: {
		name: "Immune to one damage type",
		apply: function() { npc.strongAffinityNotes.push("Add one Immunity"); }
	},
	IMMUNE_AFFINITY_NON_PHYSICAL: {
		name: "Immune to one damage type other than physical",
		apply: function() { npc.strongAffinityNotes.push("Add one Immunity other than physical"); }
	},
	IMMUNE_SHAKEN_SLOW: {
		name: "Immune to shaken and slow",
		apply: function() { npc.statusNotes.push("Immunity to the <b>shaken</b> and <b>slow</b> status effects"); }
	},
	IMMUNITY_TO_ABSORBTION: {
		name: "Replace one Immunity with Absorption",
		apply: function() { 
			npc.strongAffinityNotes.push("Replace one Immunity with Absorption");
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
		}
	},
	IMMUNITY_TWO_STATUS: {
		name: "Immunity to two status effects",
		apply: function() { 
			npc.statusNotes.push("Immunity to <b>two</b> status effects");
		}
	},
	IMMUNITY_TWO_MAGE_STATUS: {
		name: "Immunity to (chose two: dazed, enraged, poisoned, shaken)",
		apply: function() { 
			npc.statusNotes.push("Immunity to <b>(chose two: dazed, enraged, poisoned, shaken)</b>");
		}
	},
	IMPROVED_AVENGE: {
		name: "Improved Avenge (special rule)",
		apply: function() {}
	},
	INCREASE_ACCURACY: {
		name: "+3 Accuracy",
		apply: function() { 
			npc.attacks.forEach(a => a.accuracy += 3);
		}
	},	
	INCREASE_DEFENSE: {
		name: "+2 to Defense and +1 to Magic Defense",
		apply: function() { 
			npc.def += 2; 
			npc.mdef += 1;
		}
	},
	INCREASE_MDEFENSE: {
		name: "+1 to Defense and +2 to Magic Defense",
		apply: function() { 
			npc.def += 1; 
			npc.mdef += 2;
		}
	},
	INSPIRE: {
		name: "Inspire (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},	
	INTERCEPT: {
		name: "Intercept (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	MAGICAL_MASTERY: {
		name: "Magical Mastery (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	MP_BATTERY: {
		name: "MP Battery (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	NORMAL_ATTACK_BONUS_VS_CONDITION: {
		name: "Normal Attack Mod: deals 5 extra damage against targets who are (condition)",
		apply: function() { npc.attacks[0].mods.push("+5 damage vs (Condition)"); }
	},
	NORMAL_ATTACK_EFFECTIVE_VS_STATUS: {
		name: "Normal Attack Mod: Effective vs Status",
		apply: function() { npc.attacks[0].mods.push("+5 Damage vs target with (Status)"); }
	},
	NORMAL_ATTACK_IGNORES_RESISTANCE: {
		name: "Normal Attack Mod: Ignores Resistances",
		apply: function() { npc.attacks[0].mods.push("Ignores Resistances"); }
	},
	NORMAL_ATTACK_INFLICT_STATUS: {
		name: "Normal Attack Mod: Ignores Resistances",
		apply: function() { npc.attacks[0].mods.push("Hit target suffers (choose one: dazed, shaken, slow, weak)."); }
	},
	NORMAL_ATTACK_LIFE_DRAIN: {
		name: "Normal Attack Mod: Life Drain",
		apply: function() { npc.attacks[0].mods.push("Life Drain"); }
	},
	NORMAL_ATTACK_MP_RECOVERY: {
		name: "Normal Attack Mod: MP Recovery",
		apply: function() { npc.attacks[0].mods.push("Recover 10 MP (20 MP at Lvl 30+)"); }
	},
	NORMAL_ATTACK_MULTI_2: {
		name: "Normal Attack Mod: Multi (2)",
		apply: function() { npc.attacks[0].mods.push("Multi (2)"); }
	},
	NORMAL_ATTACK_OVERLOAD: {
		name: "Normal Attack Mod: Multi(2) and Overload",
		apply: function() { npc.attacks[0].mods.push("Multi(2)"); npc.attacks[0].mods.push("Overload"); }
	},
	NORMAL_ATTACK_STATUS_RECOVERY: {
		name: "Normal Attack Mod: Status Recovery",
		apply: function() { npc.attacks[0].mods.push("Status Recovery"); }
	},
	NORMAL_ATTACK_SOLO_MULTI_2: {
		name: "Normal Attack Mod: Multi (2) when no allies on scene",
		apply: function() { npc.attacks[0].mods.push("Multi (2) when no allies on scene"); }
	},
	NORMAL_ATTACK_TARGET_MDEF: {
		name: "Normal Attack Mod: Targets Magic Defense",
		apply: function() { npc.attacks[0].mods.push("Targets Magic Defense"); }
	},
	NORMAL_ATTACK_VOLATILE: {
		name: "Normal Attack Mod: Volatile",
		apply: function() { npc.attacks[0].mods.push("Voltaile"); }
	},
	NORMAL_ATTACK_WITHER: {
		name: "Normal Attack Mod: Withering",
		apply: function() { npc.attacks[0].mods.push("Wither"); }
	},
	ONE_LAST_COMMAND: {
		name: "One Last Command (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	OPPORTUNIST: {
		name: "Opportunist (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	OVERWHELM: {
		name: "Overwhelm (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	PARTING_GIFT: {
		name: "Parting Gift (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	REASSURING_AURA: {
		name: "Reassuring Aura (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	REASSURING_LEADERSHIP: {
		name: "Reassuring Leadership (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	REDUCE_PROGRESS: {
		name: "Reduce Progress (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	RESISTANCE_TO_ABSORBTION: {
		name: "Replace one Resistance with Absorption",
		apply: function() {
			npc.strongAffinityNotes.push("Replace one Resistance with Absorption");
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
		}
	},
	SECRET_TECHNIQUE: {
		name: "Secret Technique (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	SHADOW_OF_DOUBT: {
		name: "Shadow of Doubt (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	SORE_LOSER: {
		name: "Sore Loser (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	SOUL_BURST: {
		name: "Soul Burst (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	SPECIAL_ARMOR: {
		name: "Special Armor (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	STRATEGIC_COMMAND: {
		name: "Strategic Command (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},
	STRONG_ATTACK_IGNORES_RESISTANCE: {
		name: "Strong Attack Mod: Ignores Resistances",
		apply: function() { npc.attacks[1].mods.push("Ignores Resistances"); }
	},
	STRONG_ATTACK_ON_STATUS_CLEARS_SPELL: {
		name: "Strong Attack Mod: Hit target with (Status) clears one spell with duration of Scene",
		apply: function() { npc.attacks[1].mods.push("Hit target with (Status) clears one spell with duration of Scene"); }
	},
	STRONG_ATTACK_RANGED: {
		name: "Strong Attack Mod: Becomes ranged, uses [DEX + MIG], Targets suffer (Status)",
		apply: function() { 
			npc.attacks[1].isMelee = false;
			npc.attacks[1].isRanged = true;
			npc.attacks[1].attr1 = "DEX";
			npc.attacks[1].attr2 = "MIG";
			npc.attacks[1].mods.push("Target suffers (Status)");
		}
	},
	SYPHON_MIND: {
		name: "Syphon Mind (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},
	TARGET_LOCK: {
		name: "Target Lock (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, ""));
		}
	},
	THORNS: {
		name: "Thorns (Special Rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	UNWAVERING_SUPPORT: {
		name: "Unwavering Support (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	VENGEFUL_ATTACK: {
		name: "Vengeful Attack (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},	
	VULNERABILITY_BLOCK: {
		name: "Vulnerability Block (special rule)",
		apply: function() {
			npc.notes.push(new Mod(this.name, ""));
		}
	},
	//------------------------
	BREATH_SPELL: {
		name: "Learn the Breath spell and add +10 MP",
		apply: function() { 
			npc.fixedSpells.push("Breath");
			npc.bonusMp += 10;
		}
	},
	POISON_SPELL: {
		name: "Learn the Poison spell and add +10 MP",
		apply: function() { 
			npc.fixedSpells.push("Poison");
			npc.bonusMp += 10;
		}
	},
	WEAKEN_SPELL: {
		name: "Learn the Weaken spell and add +10 MP",
		apply: function() { 
			npc.fixedSpells.push("Weaken");
			npc.bonusMp += 10;
		}
	}
}