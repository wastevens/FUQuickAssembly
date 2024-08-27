class RankNoOp {
	constructor() {}
	apply() {
	}
}

class Soldier {
	constructor() {
	}
	
	apply() {
		modifications.maxCustomizationsAdd.push(function() { 
			npc.maxCustomizations++;
		});
	}
}

class Elite {
	constructor() {
	}
	
	apply() {
		modifications.maxCustomizationsAdd.push(function() { 
			npc.maxCustomizations++;
		});
		
		modifications.maxRoleSkillsAdd.push(function() { 
			npc.maxRoleSkills++;
		});
		
		modifications.hpMultiply.push(function() { 
			npc.hp *= 2;
		});
	}
}

class Champion {
	constructor(x) {
		this.x = x;
	}
	
	apply() {
		const source = this;
				
		modifications.maxRoleSkillsAdd.push(function() { 
			npc.maxRoleSkills += source.x;
		});
		
		modifications.hpMultiply.push(function() { 
			npc.hp *= source.x;
			npc.mp *= 2;
		});
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