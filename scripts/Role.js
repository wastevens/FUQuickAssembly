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
	},
	SABOTEUR: {
		name: "Saboteur",
		type: new Saboteur()
	},
	SENTINEL: {
		name: "Sentinel",
		type: new Sentinel()
	},
	SUPPORT: {
		name: "Support",
		type: new Support()
	}
}