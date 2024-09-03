class RankNoOp {
	constructor() {}
	apply() {
	}
}

class Soldier {
	constructor() {
	}
	
	apply() {
		npc.maxCustomizations++;
	}
	
	display() {
		return "Soldier";
	}
	
	fabulatorExport() {
		return "soldier";
	}
}

class Elite {
	constructor() {
	}
	
	apply() {
		npc.maxCustomizations++;
		npc.maxRoleSkills++;
		npc.hp *= 2;
	}
	
	display() {
		return "Elite";
	}
	
	fabulatorExport() {
		return "elite";
	}
}

class Champion {
	constructor(x) {
		this.x = x;
	}
	
	apply() {
		npc.maxRoleSkills += this.x;
		npc.hp *= this.x;
		npc.mp *= 2;
	}
	
	display() {
		return "Champion (" + this.x + ")";
	}
	
	fabulatorExport() {
		return "champion" + this.x;
	}
}

const Rank = {
	NOOP: {
		name: "Select your Rank",
		apply: null
	},
	SOLDIER: {
		name: "Soldier",
		type: new Soldier()
	},
	ELITE: {
		name: "Elite",
		type: new Elite()
	},
	CHAMPION_2: {
		name: "Champion (2)",
		type: new Champion(2)
	},
	CHAMPION_3: {
		name: "Champion (3)",
		type: new Champion(3)
	},
	CHAMPION_4: {
		name: "Champion (4)",
		type: new Champion(4)
	},
	CHAMPION_5: {
		name: "Champion (5)",
		type: new Champion(5)
	}
}