const Species = {
	NOOP: {
		name: "Select your Species",
		type: null
	},
	BEAST: {
		name: "Beast",
		type: new Beast()
	},
	CONSTRUCT: {
		name: "Construct",
		type: new Construct()
	},
	DEMON: {
		name: "Demon",
		type: new Demon()
	},
	ELEMENTAL: {
		name: "Elemental",
		type: new Elemental()
	},
	HUMANOID: {
		name: "Humanoid",
		type: new Humanoid()
	},
	MONSTER: {
		name: "Monster",
		type: new Monster()
	},
	PLANT: {
		name: "Plant",
		type: new Plant()
	},
	UNDEAD: {
		name: "Undead",
		type: new Undead()
	}
}
