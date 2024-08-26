class Soldier {
	constructor() {
	}
	
	apply() {
		modifications.rank.push(function() { 
			npc.maxCustomizations++;
		});
	}
	
	modify() {
	}
	
	undo() {
	}
}

class Elite {
	constructor() {
	}
	
	apply() {
		modifications.rank.push(function() { 
			npc.maxRoleSkills++;
			npc.maxCustomizations++;
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
		modifications.rank.push(function() { 
			npc.maxRoleSkills += source.x;
			npc.hp *= source.x;
			npc.mp *= 2;
		});
	}
}