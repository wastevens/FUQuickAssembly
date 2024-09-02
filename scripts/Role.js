const Role = {
	NOOP: {
		name: "Select your Role",
		type: null
	},
	BRUTE: {
		name: "Brute",
		type: new Brute()
	},
	HUNTER: {
		name: "Hunter",
		type: new Hunter()
	},
	MAGE: {
		name: "Mage",
		type: new Mage()
	}
}