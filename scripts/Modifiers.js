class Mod {
	constructor(name, effect) {
		this.name = name;
		this.effect = effect;
	}
}

const Modifier = {
	NOOP_BOSS_SKILL: {
		name: "Select a Boss Skill",
		apply: function() {}
	},	
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
	ADD_HUNTER_SPELLS: {
		name: "Learn two spells",
		apply: function() { 
			npc.spellNote = "Magic Check is [INS + WLP]"
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
	ADD_STRONG_ATTACK_HUNTER: {
		name: "Add Strong Attack",
		apply: function() {
			const attack = new Attack();
			attack.isMelee = true;
			attack.isRanged = true;
			attack.name = "Strong Attack";
			attack.attr1 = "DEX";
			attack.attr2 = "INS";
			attack.flatDamage = 5;
			attack.extraDamage = true;
			attack.mods.push("**Multi(2)**, and this NPC cannot perform an actions or free actions until the end of their next turn");
			npc.attacks.push(attack);
		}
	},
	ADD_STRONG_ATTACK_SABOTEUR: {
		name: "Add Strong Attack",
		apply: function() {
			const attack = new Attack();
			attack.isMelee = true;
			attack.isRanged = true;
			attack.name = "Normal Attack";
			attack.attr1 = "DEX";
			attack.attr2 = "INS";
			attack.extraDamage = false;
			attack.mods.push("Choose one or two (last until the end of their next turn)");
			attack.mods.push("The target cannot recover hit points");
			attack.mods.push("The target cannot recover mind points");
			attack.mods.push("The target cannot perform an action of your choice");
			attack.mods.push("The target cannot perform free attacks");
			attack.mods.push("The target cannot see this NPC");
			attack.mods.push("The target cannot see this NPC's allies");
			attack.mods.push("The target loses all Resistances and Immunities, and cannot gain them");
			
			npc.attacks.push(attack);
		}
	},
	ADVISE: {
		name: "Advise (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, "This NPC may use an action and spend 10 Mind Points to choose one ally who is able to hear them. That ally recovers from **dazed** and **shaken** and gains a +3 bonus to the first Check they perform before the start of this NPC's next turn."));
		}		
	},
	AMBUSH: {
		name: "Ambush (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "During the **first** round of each conflict, this NPC treats their **(choose one: Dexterity, Insight, Willpower)** as being one die size higher (maximum **d12**)."));
		}
	},
	AURA_OF_UNEASE: {
		name: "Aura of Unease (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "As long as this NPC is present on the scene, enemies cannot recover from **(choose two: dazed, enraged, poisoned, shaken, slow, weak)**."));
		}
	},
	AVENGE: {
		name: "Avenge (special rule) (Elites & Champions only)",
		apply: function() {
			npc.specials.push(new Mod("Avenge (special rule)", "After an enemy **hits** you and/or one or more allies with **(choose one or two: a melee attack, a ranged attack, an offensive spell)**, this NPC performs **strong attack** as a **free attack** against that enemy (after the attack or spell has been resolved). Treat the **High Roll** of the Accuracy Check as being equal to 0 when determining damage dealt by this attack."));
		}
	},
	BAD_TEMPER: {
		name: "Bad Temper (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "As long as this NPC is in **Crisis**, they are immune to all status effects other than **enraged**."));
		}
	},
	BARRICADE: {
		name: "Barricade (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, "This NPC may use an action and spend 10 Mind Points to grant themselves and all of their allies Resistance to **(choose one or two: air, bolt, dark, earth, fire, ice, light, physical, poison)** damage. This benefit lasts until the end of the scene, or until this NPC suffers damage of a type they are Vulnerable to."));
		}
	},	
	COLLAPSE: {
		name: "Collapse (special rule) (Elites & Champions only)",
		apply: function() {
			npc.specials.push(new Mod("Collapse (special rule)", 'When **strong attack misses all targets**, fill 1 section of a six-section Clock named "Collapse". Then, if the "Collapse" Clock is full, this NPC loses this Skill and each creature present on the scene suffers a **minor** amount of **(choose one: air, bolt, dark, earth, fire, ice, light, physical, poison)** damage.'));
		}
	},
	COLLATERAL_DAMAGE: {
		name: "Collateral Damage (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC successfully performs the **Hinder** action, they may also deal 10 **(choose one: air, bolt, dark, earth, fire, ice, light, physical, poison)** damage to the target. This effect deals 10 extra damage if this NPC is **level 30 or higher**."));
		}
	},
	CONTEXT_BONUS: {
		name: "+3 bonus to Opposed checks in favorable contexts",
		apply: function() {
			npc.specials.push(new Mod("Contextual Bonus", "+3 bonus to Opposed checks in favorable contexts"));
		}
	},
	CORROSIVE_STATUS: {
		name: "Corrosive Status",
		apply: function() {
			npc.specials.push(new Mod(this.name, "During their last turn of each round, this boss uses an action to deal a **minor** amount of **(choose one: air, bolt, dark, earth, fire, ice, light, physical, poison)** damage to every enemy present on the scene who is suffering from **(choose one: dazed, enraged, poisoned, shaken, slow, weak)**. If this boss is **level 30 or higher,** the amount of damage becomes **heavy** instead of **minor**."));
		}
	},	
	CRUEL_HYPNOSIS: {
		name: "Cruel Hypnosis (unique action) (Elites & Champions only)",
		apply: function() {
			npc.actions.push(new Mod("Cruel Hypnosis (unique action)", "This NPC may use an action and spend 20 MP to choose an enemy they can see who is suffering from **(choose one: dazed, enraged, or shaken)**. If they do, that enemy must immediately perform a **free attack** with an equipped weapon or basic attack, against a target chosen by this NPC."));
		}
	},	
	CRUSH: {
		name: "Crush (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, 'This NPC may use an action to have all enemies they are currently **enveloping** lose 20 Hit Points, or 30 Hit Points if this NPC is **level 30 or higher**. If you choose this Skill, **strong attack** gains "Creatures hit by this attack are **enveloped** until this NPC uses **strong attack** again, or until this NPCs suffers damage of a type they are Vulnerable to.'));
		}
	},
	CRUSHING_ADVANTAGE: {
		name: "Crushing Advantage",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When you choose this Skill, pick a **field** in which this boss is a true expert (such as courtly intrigue, street chases, vigilance and surveillance, technological tinkering, or magical experimentation). During their last turn of each round, this boss spends one action to automatically fill or erase **1 section** of a Clock of their choice related to the chosen **field**; if they wish so, they may also spend 1 Ultima Point to fill or erase an additional section of that Clock."));
		}
	},	
	DARK_IMMUNITY_TO_ABSORBTION: {
		name: "Replace Dark Immunity with Absorption",
		apply: function() { 
			npc.strongAffinityNotes.push("Replace Dark Immunity with Absorption");
			npc.dark = "AB";
		}
	},
	DIE_HARD: {
		name: "Die Hard (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC is reduced to 0 Hit Points for the first time during a scene, instead they are reduced to exactly 1 Hit Point."));
		}
	},
	ELEMENTAL_CRISIS: {
		name: "Elemental Crisis",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this boss enters **Crisis** for the first time during a conflict, their damage Affinities and/or the type of damage dealt by their attacks, spells and Skills change until the end of the scene. Make sure the boss still has **one or more Vulnerabilities** that the Player Characters can exploit after the transformation."));
		}
	},	
	ELEMENT_DRAIN: {
		name: "Element Drain (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, " When this NPC suffers damage, if that damage has a type and that type is not **physical** or **poison**, they recover an amount of Mind Points equal to **half** the damage they suffered."));
		}
	},
	ELEMENT_SHIFT: {
		name: "Element Shift (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC casts a spell that deals **air, bolt, dark, earth, fire, ice, or light** damage, they gain **Absorption** to that damage type and **Vulnerability** to a different damage type that is intuitively effective against it (respectively, we suggest: **bolt, earth, light, air, ice, fire , or dark**). These Affinities **replace** any of this NPC's previously existing Affinities to these damage types, and last until this NPC triggers this special rule again."));
		}
	},
	ELUSIVE: {
		name: "Elusive (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, " As long as this NPC is suffering from **no status effects**, all sources of damage deal no damage to them instead."));
		}
	},
	EMERGENCY_CAMO: {
		name: "Emergency Camouflage (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC enters **Crisis** for the first time during a scene, they become invisible until the start of their next turn (effects that require being able to see this NPC cannot affect them)."));
		}
	},
	ENHANCING_GUARD: {
		name: "Enhancing Guard (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "After this NPC performs the **Guard** action, they will use the first available action on their next turn to perform **normal attack**, but the attack will deal 5 extra damage and its damage will ignore Resistances."));
		}
	},
	ENTANGLE: {
		name: "Entangle (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "As long as this NPC is present on the scene, enemies who are suffering from **two or more status effects** cannot perform **free attacks.**"));
		}
	},
	EXHAUSTING_COMPROMISE: {
		name: "Exhausting Compromise (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "After this NPC **fails** an Opposed Check during an enemy's turn, if that enemy is suffering from **two or more status effects**, this NPC may spend 20 Mind Points to fill or erase 1 section  of a Clock of their choice."));
		}
	},
	FALSE_SENSE_OF_SECURITY: {
		name: "False Sense of Security (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When an ally's turn ends, if that ally **failed** an Opposed Check or **missed all targets** with an attack or **offensive spell** during that turn, and if this NPC still has one or more turns to perform during this round, this NPC may immediately take **one** of their remaining turns. During this turn, this NPC deals 5 extra damage."));
		}
	},
	FOLLOW_UP_ATTACK: {
		name: "Follow-up Attack (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "After an ally hits one or more enemies with an attack, if that ally is affected by one or more spells with a **duration** of \"Scene\" cast by this NPC, this NPC performs **normal attack** as a **free attack** against one of those enemies, chosen at random (after that ally's attack has been resolved). Treat the **High Roll** of the Accuracy Check as being equal to 0 when determining damage dealt by this attack."));
		}	
	},
	FLYING: {
		name: "Flying (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "Page **307** of the **Core Rulebook**."));
		}
	},
	HEALING_AURA: {
		name: "Healing Aura (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "At the end of this NPC's turn, every ally present on the scene recovers a **minor** amount of Hit Points."));
		}
	},	
	HINDERING_SPECIALIST: {
		name: "Hindering Specialist (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "Once per turn, when this  NPC  successfully  performs the **Hinder** action, they may immediately perform another **Hinder** action for free. This second **Hinder** action must target a different creature."));
		}
	},
	HUNTERS_BAIT: {
		name: "Hunter's Bait (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "After an enemy **hits or misses** this NPC with **(choose one: a melee attack, a ranged attack, an offensive spell)**, if the Result of the Accuracy Check or Magic Check is an even number, this NPC performs their **normal attack** as a **free attack**, targeting **only** that enemy (after the attack or spell has been resolved). Treat the **High Roll** of the Accuracy Check as being equal to 0 when determining damage dealt by this attack."));
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
	IMMUNE_BRUTE_SKILL: {
		name: "Immune to (choose two: poisoned, shaken, slow)",
		apply: function() { npc.statusNotes.push("Immunity to **(choose two: poisoned, shaken, slow)**"); }
	},
	IMMUNE_SENTINEL_SKILL: {
		name: "Immune to (choose two: poisoned, shaken, weak)",
		apply: function() { npc.statusNotes.push("Immunity to **(choose two: poisoned, shaken, weak)**"); }
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
			npc.statusNotes.push("Immunity to **two** status effects");
		}
	},
	IMMUNITY_TWO_MAGE_STATUS: {
		name: "Immunity to (chose two: dazed, enraged, poisoned, shaken)",
		apply: function() { 
			npc.statusNotes.push("Immunity to **(chose two: dazed, enraged, poisoned, shaken)**");
		}
	},
	IMPROVED_ADVISE: {
		name: "Improved Advise (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "The **Advise** Skill now allows the chosen ally to recover from **all** status effects."));
		}
	},
	INCREASE_ACCURACY: {
		name: "+3 Accuracy",
		apply: function() { 
			npc.precision = true;
		}
	},
	INCREASE_MAGIC: {
		name: "+3 Magic Checks",
		apply: function() { 
			npc.magic = true;
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
			npc.actions.push(new Mod(this.name, "This NPC may use an action and spend 10 Mind Points to choose one ally who is able to hear them. That ally recovers a minor amount of **(choose one: Hit Points, Mind Points)**, and treats their **(choose one: Dexterity, Insight, Might, Willpower)** as being one die size higher until the start of this NPC's next turn."));
		}
	},	
	INTERCEPT: {
		name: "Intercept (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "This is identical to the **Guardian's Protect** Skill (see **Core Rulebook**, page XXX), but has unlimited uses and **can only protect a specific ally** of this NPC, chosen at the start of the conflict scene."));
		}
	},
	LIGHTNING_FAST: {
		name: "Lightning Fast (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC deals damage during **another** creature's turn, they deal 5 extra damage unless suffering from **one or more status effects.**"));
		}
	},
	MAGICAL_MASTERY: {
		name: "Magical Mastery (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC succeeds on an Opposed Check related to **magic, Rituals or supernatural forces**, if that Check allows them to fill or erase sections of a Clock, they may fill or erase 1 additional section of that Clock."));
		}
	},
	MP_BATTERY: {
		name: "MP Battery (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, " When an ally spends Mind Points, this NPC may spend Mind Points in place of that ally (provided they have sufficient MP to pay for the entire cost)."));
		}
	},	
	NORMAL_ATTACK_BONUS_VS_CONDITION: {
		name: "Normal Attack Mod: Deal 5 extra damage against targets who meet (Condition)",
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
	NORMAL_ATTACK_MULTI_2_ELITE_OR_BETTER: {
		name: "Normal Attack Mod: Multi (2) (Elites & Champions only)",
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
			npc.specials.push(new Mod(this.name, "After this NPC is reduced to 0 Hit Points or leaves the scene, if they have acquired the **Advise, Inspire, and/or Strategic Command** Skills, they immediately perform **one** of them for free, at no MP cost."));
		}
	},
	OPPORTUNIST: {
		name: "Opportunist (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC performs an Opposed Check against a creature who is suffering from **dazed and/or slow**, that Check triggers a **critical success** if both dice show the same number (and the Result is not a **fumble**)."));
		}
	},
	OVERWHELM: {
		name: "Overwhelm (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC performs an Opposed Check against a creature who is suffering from **shaken and/or weak**, that Check triggers a **critical success** if both dice show the same number (and the Result is not a **fumble**)."));
		}
	},
	PART_REGENERATION: {
		name: "Part Regeneration",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this boss enters **Crisis** for the first time during a conflict, this boss and all of their allies present on the scene recover from all status effects; then, this boss summons **soldiers** until their side has returned to the same composition it had at the start of the conflict scene."));
		}
	},	
	PARTING_GIFT: {
		name: "Parting Gift (special rule) (Soldiers & Elites only)",
		apply: function() {
			npc.specials.push(new Mod("Parting Gift (special rule)", "After this NPC is reduced to 0 Hit Points or leaves the scene, each enemy affected by a **Weaken** spell cast by this NPC immediately loses a **minor** amount of Hit Points."));
		}
	},
	REASSURING_AURA: {
		name: "Reassuring Aura (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "Allies of this NPC that are able to see and/or hear them are immune to **(choose one: dazed, shaken, slow, or weak)**."));
		}
	},
	REDUCE_PROGRESS: {
		name: "Reduce Progress (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When an enemy of this NPC fills or erases **two or more sections** of a Clock, if this NPC is not suffering from **any** status effect among **(choose two: dazed, enraged, poisoned, shaken, slow, weak)**, that enemy fills or erases 1 fewer section of that Clock, respectively (to a minimum of 1)."));
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
			npc.specials.push(new Mod(this.name, "Choose one of this NPC's **basic attacks** or **spells**. This NPC may perform the chosen attack or spell without anyone other than the targets realizing what it was (usually concealed as a cutting remark, elaborate movement or innocuous trick)."));
		}
	},
	SHADOW_OF_DOUBT: {
		name: "Shadow of Doubt (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "As long as this NPC is present on the scene, any Player Character suffering from **two or more status effects** cannot **invoke Traits and Bonds**."));
		}
	},	
	SORE_LOSER: {
		name: "Sore Loser (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "After this NPC **fails** an Opposed Check during an enemy's turn, if that enemy filled or erased **two or more** sections of a Clock through this Check, that enemy suffers **(choose one: dazed, shaken, slow, or weak)**."));
		}
	},
	SOUL_BURST: {
		name: "Soul Burst (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When this NPC is reduced to 0 Hit Points, each creature present on the scene recovers a **heavy** amount of Mind Points."));
		}
	},	
	SPECIAL_ARMOR: {
		name: "Special Armor (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "As long as this NPC is **not** in **Crisis**, they reduce all damage they suffer from **(choose one: attacks, spells, skills)** by 5 (before applying Affinities)."));
		}
	},
	SPECIAL_RESISTANCE: {
		name: "Special Resistance (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "This NPC has Resistance to damage of all types dealt by sources that deal damage to **(choose one: exactly one creature, two or more creatures)**."));
		}
	},
	STEADY_RECOVERY: {
		name: "Steady Recovery (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "At the end of each of this NPC's turns, if they are suffering from **three or more status effects**, they heal from all status effects."));
		}
	},
	STRATEGIC_COMMAND: {
		name: "Strategic Command (unique action) (Elites & Champions only)",
		apply: function() {
			npc.actions.push(new Mod("Strategic Command (unique action)", "This NPC may use an action and spend 10 Mind Points to choose one ally who is able to hear them and still has **one or more turns to perform** during this round. That ally will perform their next turn immediately after this NPC's; the first time that ally deals damage during that turn, they deal 10 extra damage."));
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
			npc.attacks[1].mods.push("Target suffers **(choose one: dazed, shaken, slow, or weak)**");
		}
	},
	STRONG_ATTACK_TARGET_MDEF: {
		name: "Strong Attack Mod: Targets Magic Defense",
		apply: function() { 
			if(npc.attacks.length > 1) {
				npc.attacks[1].mods.push("Targets Magic Defense"); 
			}
		}
	},
	SYPHON_MIND: {
		name: "Syphon Mind (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, "As long as this NPC is present on the scene, all enemy MP costs are increased by 10."));
		}
	},
	TARGET_LOCK: {
		name: "Target Lock (unique action)",
		apply: function() {
			npc.actions.push(new Mod(this.name, "When this NPC performs the **Guard** action, they **lock onto** an enemy they can see, chosen at random. When this NPC performs **normal attack** while **locked onto** an enemy they are able to target, they **must** target that enemy. If they do, the attack deals 10 extra damage and the **target lock** ends (even if the attack missed)."));
		}
	},
	TEMPORARY_DEFENSES: {
		name: "Temporary Defenses",
		apply: function() {
			npc.specials.push(new Mod(this.name, "This boss always treats their **(choose one: Defense, Magic Defense)** score as being equal to **【12 + (this boss's level, divided by 20)】**. When this boss enters **Crisis** for the first time during a scene, they lose this benefit and their **normal attack** gains **multi (2)**; if **normal attack** already had **multi (2)**, increase it to **multi (3)** instead."));
		}
	},	
	THREATEN: {
		name: "Threaten (Special Rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "Enemies must include this NPC among the targets of their **attacks and offensive spells**, if able. When this NPC suffers damage of a type they are Vulnerable to, they **lose** this special rule until the start of their next turn."));
		}
	},
	THORNS: {
		name: "Thorns (Special Rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When an enemy **hits** this NPC with a **melee** attack, after that attack has been resolved, this NPC deals 5 **physical** damage to that enemy. This amount increases to 10 damage if this NPC is **level 30 or higher.**"));
		}
	},
	UNWAVERING_SUPPORT: {
		name: "Unwavering Support (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "**Villain** allies can spend Ultima Points to **invoke** one of this NPC's **Traits** to reroll their own Checks. When a Villain does so, their Check triggers a **critical success** if both dice show the same number (and it is not a **fumble**)."));
		}
	},
	VENGEFUL_ATTACK: {
		name: "Vengeful Attack (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When an enemy reduces this NPC to 0 Hit Points, this NPC immediately performs **strong attack** as a **free attack** against that enemy. Treat the High Roll of the Accuracy Check as being equal to 0 when determining damage dealt by this attack."));
		}
	},	
	VULNERABILITY_BLOCK: {
		name: "Vulnerability Block (special rule)",
		apply: function() {
			npc.specials.push(new Mod(this.name, "Choose **one Vulnerability** of an **elite** or **champion** ally: as long as this NPC is present on the scene, the chosen ally treats it as a **Resistance** instead."));
		}
	},
	ZOMBIFICATION: {
		name: "Zombification",
		apply: function() {
			npc.specials.push(new Mod(this.name, "When a creature other than the boss recovers Hit Points, if that creature is suffering from **(choose one: weak, poisoned)**, they lose half as many Hit Points instead. Use this Skill only if the Player Characters can efficiently remove status effects."));
		}
	},	
	//------------------------
	BREATH_SPELL: {
		name: "Learn the Breath spell and add +10 MP",
		apply: function() {
			npc.fixedSpells.push(Spell.BREATH.name);
			npc.bonusMp += 10;
			Spell.BREATH.apply();
		}
	},
	POISON_SPELL: {
		name: "Learn the Poison spell and add +10 MP",
		apply: function() {
			npc.fixedSpells.push(Spell.POISON.name);
			npc.bonusMp += 10;
			Spell.POISON.apply();
		}
	},
	WEAKEN_SPELL: {
		name: "Learn the Weaken spell and add +10 MP",
		apply: function() { 
			npc.fixedSpells.push(Spell.WEAKEN.name);
			npc.bonusMp += 10;
			Spell.WEAKEN.apply();
		}
	}
}