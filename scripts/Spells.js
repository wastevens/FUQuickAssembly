class ExportSpell {
	constructor(name, mp, duration, maxTargets, target, isOffensive, damageType, effect) {
		this.name = name;
		this.mp = mp;
		this.duration = duration;
		this.maxTargets = maxTargets;
		this.target = target;
		this.type = (isOffensive ? "offensive" : "");
		this.damagetype = damageType;
		this.effect = effect;
		this.special = [];
		this.attr1 = npc.magicAttr1();
		this.attr2 = npc.magicAttr2();
		this.itemType = "spell";
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
			npc.exportSpells.push(new ExportSpell("Area Status", "20", "Instantaneous", "0", "Special", false, "physical", "Choose any number of creatures you can see: each of them suffers **(choose one: dazed, shaken, slow, weak)**."));
		}
	},
	AURA: {
		name: "Aura",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Aura", "5", "Scene", "3", "Up to three creatures", false, "physical", "Until this spell ends, each target may treat their Magic Defense as being equal to 12 against any effects that target it (they are still free to use their normal Defense score if higher than 12)."));
		}
	},
	AWAKEN: {
		name: "Awaken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Awaken", "20", "Instantaneous", "1", "One creature", false, "physical", "You allow a creature to focus their vital energy into accomplishing what they previously could not. Choose one Attribute: **Dexterity, Insight, Might, or Willpower**. Until this spell ends, the target treats the chosen Attribute as if it were one die size higher (up to a maximum of **d12**)."));
		}		
	},
	BARRIER: {
		name: "Barrier",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Barrier", "5", "Scene", "3", "Up to three creatures", false, "physical", "Until this spell ends, each target may treat their Defense as being equal to 12 against any effects that target it (they are still free to use their normal Defense score if higher than 12)."));
		}
	},
	BREATH: {
		name: "Breath",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Breath", "5", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **【HR + 10】 (choose type)** damage."));
		}
	},
	CLEANSE: {
		name: "Cleanse",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Cleanse", "5", "Instantaneous", "3", "Up to three creatures", false, "physical", "You strengthen and purify the soul energy coursing through your companions. Each target recovers from all status effects."));
		}
	},
	CURSE: {
		name: "Curse",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Curse", "5", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **(choose one: dazed, shaken, slow, weak)**."));
		}
	},
	CURSE_XL: {
		name: "Curse XL",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Curse XL", "10", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **(choose two: dazed, shaken, slow, weak)**."));
		}
	},
	CURSED_BREATH: {
		name: "Cursed Breath",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Cursed Breath", "10", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **【HR + 15】 (choose type)** damage and suffers **(choose one: dazed, shaken, slow, weak).**"));
		}
	},
	DEVESTATION: {
		name: "Devestation (Elite & Champions only, must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Devastation", "30", "Instantaneous", "0", "Special", true, "physical", "Choose any number of creatures you can see: each of them suffers 30 **(choose type)** damage. You may only cast this spell **once per turn**. This spell can only by cast during the caster's **last turn in the round**."));
		}
	},	
	DISPEL: {
		name: "Dispel",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Dispel", "10", "Instantaneous", "1", "One creature", false, "physical", "You release a wave of negative energy and cleanse all magic from a creature. If the target is affected by one or more spells with a **duration** of \"Scene\", they are no longer affected by any of those spells instead."));
		}
	},
	DIVINATION: {
		name: "Divination",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Divination", "10", "Scene", "1", "Self", false, "physical", "You glimpse briefly into the future. Until this spell ends, after a creature you can see performs a Check, if it was not a **fumble** nor a **critical success**, you may force that creature to reroll **both** dice. Once you have forced **two** rerolls this way, this spell ends."));
		}
	},
	DRAIN_SPIRIT: {
		name: "Drain Spirit",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Drain Spirit", "5", "Instantaneous", "1", "One creature", true, "physical", "You consume a creature's psyche. The target loses **【HR + 15】** Mind Points. Then, you recover an amount of Mind Points equal to half the Mind Points loss they suffered (if the loss was reduced to 0 in some way, you recover none)."));
		}
	},
	ELEMENTAL_SHROUD: {
		name: "Elemental Shroud",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Elemental Shroud", "5", "Scene", "3", "Up to three creatures", false, "physical", "You weave magical energy and protect the targets from the fury of the elements. Choose a damage type: **air, bolt, earth, fire or ice.** Until this spell ends, each target gains Resistance against the chosen damage type."));
		}
	},	
	ENRAGE: {
		name: "Enrage",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Enrage", "10", "Instantaneous", "1", "One creature", true, "physical", "You cause a creature to lose any semblance of temper and act brazenly. The target suffers **enraged** and cannot perform the **Guard or Spell** actions during their next turn."));
		}
	},
	FLARE: {
		name: "Flare (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Flare", "20", "Instantaneous", "1", "One creature", true, "fire", "You channel a single ray of fire towards your foe, its temperature so high that it will pierce through most defenses. The target suffers **【HR + 25】 fire** damage. Damage dealt by this spell ignores Resistances."));
		}
	},
	FULGAR: {
		name: "Fulgar",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Fulgar", "10", "Instantaneous", "3", "Up to three creatures", true, "bolt", "You weave electricity into a wave of crackling bolts. Each target hit by this spell suffers **【HR + 15】 bolt** damage. **Opportunity:** Each target hit by this spell suffers **dazed**."));
		}
	},
	GLACIES: {
		name: "Glacias (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Glacias", "10", "Instantaneous", "3", "Up to three creatures", true, "ice", "You coat your foes under a thick layer of frost. Each target hit by this spell suffers **【HR + 15】 ice** damage. **Opportunity:** Each target hit by this spell suffers **slow**."));
		}
	},
	HALLUCINATION: {
		name: "Hallucination",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Hallucination", "5", "Instantaneous", "3", "Up to three creatures", true, "physical", "You alter the senses of your enemies, causing them to experience bizarre or frightening  hallucinations. Choose **dazed or shaken**: you inflict the chosen status effect on each target hit by this spell."));
		}
	},
	HEAL: {
		name: "Heal",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Heal", "10", "Instantaneous", "3", "Up to three creatures", false, "physical", "You invigorate your companions, soothing their pain and healing their fatigue. Each target recovers 40 Hit Points. This amount increases to 50 Hit Points if you are **level 20 or higher**, or to 60 Hit Points if you are **level 40 or higher.**"));
		}		
	},
	ICEBERG: {
		name: "Iceberg (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Iceberg", "20", "Instantaneous", "1", "One creature", true, "ice", "A pillar of ice magic envelops your foe, suddenly dropping their body temperature to a critical level. The target suffers **【HR + 25】 ice** damage. Damage dealt by this spell ignores Resistances."));
		}
	},
	IGNIS: {
		name: "Ignis",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Ignis", "10", "Instantaneous", "3", "Up to three creatures", true, "fire", "You unleash a searing barrage against your foes, conjuring flames out of thin air. Each target hit by this spell suffers **【HR + 15】 fire** damage. **Opportunity:** Each target hit by this spell suffers **shaken**."));
		}
	},
	LICK_WOUNDS: {
		name: "Lick Wounds",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Lick Wounds", "5", "Instantaneous", "1", "Self", false, "physical", "You recover 20 Hit Points. This amount increases to 30 Hit Points if you are **level 20 or higher**, to 40 Hit Points if you are **level 40 or higher**, or to 50 Hit Points if you are **level 60** or higher."));
		}
	},
	LIFE_THEFT: {
		name: "Life Theft",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Life Theft", "10", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **【HR + 15】 (choose type)** damage. Then, you recover an amount of Hit Points equal to half the Hit Point loss they suffered."));
		}
	},
	LUX: {
		name: "Lux",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Lux", "10", "Instantaneous", "3", "Up to three creatures", true, "light", "You focus your inner energy into a barrage of blinding soul rays. Each target hit by this spell suffers **【HR + 15】 light** damage. **Opportunity:** Each target hit by this spell suffers **dazed**."));
		}
	},
	MIND_THEFT: {
		name: "Mind Theft",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Mind Theft", "10", "Instantaneous", "1", "One creature", true, "physical", "The target suffers **【HR + 15】 (choose type)** damage. Then, you recover an amount of Mind Points equal to half the Hit Point loss they suffered."));
		}
	},
	MIRROR: {
		name: "Mirror",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Mirror", "10", "Scene", "1", "Self", "physical", false, "You twist the laws of magic. Until this spell ends, if an offensive spell is cast on the target, the creature who cast that offensive spell will be targeted in their stead (any other targets of the offensive spell will be targeted as normal). Once that happens, this spell ends."));
		}
	},
	OMEGA: {
		name: "Omega (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Omega", "20", "Instantaneous", "1", "One creature", true, "physical", "You invoke doom on your foe, turning strength into frailty. The target loses an amount of Hit Points equal to **【20 + half the target's level】**."));
		}
	},	
	POISON: {
		name: "Poison",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Poison", "10", "Instantaneous", "3", "Up to three creatures", true, "physical", "Each target hit by this spell suffers **poisoned**."));
		}
	},
	QUICKEN: {
		name: "Quicken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Quicken", "20", "Instantaneous", "1", "One creature", false, "physical", "The target may immediately perform a **free attack** with a basic **attack**."));

		}
	},	
	RAGE: {
		name: "Rage",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Rage", "10", "Instantaneous", "3", "Up to three creatures", true, "physical", "Each target hit by this spell suffers **enraged**."));
		}
	},
	REINFORCE: {
		name: "Reinforce",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Reinforce", "5", "Scene", "3", "Up to three creatures", false, "physical", "You protect the targets from attacks that would corrupt their body and spirit. Choose **dazed, enraged, poisoned, shaken, slow, or weak.** Until this spell ends, each target becomes immune to the chosen status effect."));
		}
	},
	SHELL: {
		name: "Shell",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Shell", "10", "Scene", "1", "Self", false, "physical", "Until this spell ends, you gain Resistance to **physical** damage."));
		}
	},
	TERRA: {
		name: "Terra",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Terra", "10", "Instantaneous", "3", "Up to three creatures", true, "earth", "Spires of jagged rock erupt from the ground beneath your foes, closing around them. Each target hit by this spell suffers **【HR + 15】 earth** damage.  This spell cannot target creatures who are flying, floating, falling, or otherwise in mid-air. **Opportunity:** Each target hit by this spell performs one fewer action on their next turn (to a minimum of 0 actions)."));
		}
	},
	THUNDERBOLT: {
		name: "Thunderbolt (Must be Lvl 30+)",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Thunderbolt", "20", "Instantaneous", "1", "One creature", true, "bolt", "You send lightning striking at your foe. The target suffers **【HR + 25】 bolt** damage. Damage dealt by this spell ignores Resistances."));
		}
	},
	TORPOR: {
		name: "Torpor",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Torpor", "5", "Instantaneous", "3", "Up to three creatures", true, "physical", "You smother the soul energy coursing through the bodies of your foes, hindering their movements. Choose **slow or weak**: you inflict the chosen status effect on each target hit by this spell."));
		}
	},
	UMBRA: {
		name: "Umbra",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Umbra", "10", "Instantaneous", "3", "Up to three creatures", true, "dark", "A storm of dark energy turns matter into ash. Each target hit by this spell suffers **【HR + 15】 dark** damage. **Opportunity:** Each target hit by this spell suffers **weak**."));
		}
	},
	VENTUS: {
		name: "Ventus",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Ventus", "10", "Instantaneous", "3", "Up to three creatures", true, "wind", "You summon the power of winds against your enemy Each target hit by this spell suffers **【HR + 15】 wind** damage.  **Opportunity:** Each flying  target hit by this spell is forced to land immediately."));
		}
	},
	WAR_CRY: {
		name: "War Cry",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("War Cry", "10", "Scene", "3", "Up to three creatures", false, "physical", "Until this spell ends, each target gains a +1 bonus to Accuracy Checks."));
		}
	},
	WEAKEN: {
		name: "Weaken",
		apply: function() {
			npc.exportSpells.push(new ExportSpell("Weaken", "10", "Scene", "1", "One creature", true, "physical", "Until this spell ends, the target suffers 5 extra damage from all sources that deal **(choose type)** damage."));
		}
	}
}