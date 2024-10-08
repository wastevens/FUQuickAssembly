class Attack {
	constructor() {
		this.isRanged = false;
		this.isMelee = false;
		this.name = "";
		this.attr1 = "";
		this.attr2 = "";
		this.accuracy = 0;
		this.flatDamage = 0;
		this.extraDamage = false;
		this.mods = [];
	}
	
	_attrName(attr) {
		switch(attr.toUpperCase()) {
			case("DEX"):
				return "dexterity";
			case("INS"):
				return "insight";
			case("MIG"):
				return "might";
			case("WLP"):
				return "will";
		}
		return "???";
	}
	
	fabulatorExport() {
		const m = {}
		m.name = this.name;
		m.extraDamage = this.extraDamage;
		m.flatDamage = this.flatDamage;
		m.special = this.mods;
		
		m.itemType = "basic";
		m.type = "physical";
		m.attr1 = this._attrName(this.attr1);
		m.attr2 = this._attrName(this.attr2);
		m.range = this.ranged ? "distance" : "melee";
		
		return m;
	}
	
	display() {
		const accuracyBonus = Math.floor(npc.level / 10);
		const damageBonus = Math.floor(npc.level / 20) * 5;
		
		const attackRow = $("<div>").addClass("row").addClass("attack");
		
		const glyphDiv = $("<div>").addClass("col-1").addClass("p-0").addClass("text-center");
		const meleeGlyph = $("<img>").attr("src", "https://thousandmazypaths.neocities.org/FUQuickGen/glyphs/m-109.svg").css("height", "24px");
		const rangedGlyph = $("<img>").attr("src", "https://thousandmazypaths.neocities.org/FUQuickGen/glyphs/r-114.svg").css("height", "24px");
		if(this.isMelee && this.isRanged) {
			glyphDiv.append(meleeGlyph).append(" or ").append(rangedGlyph);
		} else if(this.isMelee) {
			glyphDiv.append(meleeGlyph);
		} else if(this.isRanged) {
			glyphDiv.append(rangedGlyph);
		}
			
		const basicDiv = $("<div>").addClass("col-5");
		const nameSpan = $("<span>").append(this.name);
		const accuracy = (this.accuracy ? this.accuracy : 0) + accuracyBonus + (npc.precision ? 3 : 0);
		const accuracySpan = $("<span>").append("<b>[" + this.attr1 + " + " + this.attr2 + "]" + (accuracy ? " + " + accuracy : ""));
		const damage = 5 + (this.extraDamage ? 5 : 0) + this.flatDamage + damageBonus;
		const dmgSpan = $("<span>").append("<b>[HR + " + damage +"]</b> (Type) damage");
		basicDiv.append(nameSpan).append(this._spaceSpan()).append(accuracySpan).append(this._spaceSpan()).append(dmgSpan);
		
		const modDiv = $("<div>").addClass("col");
		for(let i=0;i<this.mods.length-1;i++) {
			const spanMod = $("<span>").append(this.mods[i]);
			modDiv.append(spanMod).append(this._spaceSpan());
		}
		const spanMod = $("<span>").append(this.mods[this.mods.length-1]);
		modDiv.append(spanMod)
			
		attackRow.append(glyphDiv).append(basicDiv).append(modDiv);
		
		return attackRow;
	}
	
	_spaceSpan() {
		return $("<span>").addClass("p-0").append(" ").append($("<img>").attr("src", "https://thousandmazypaths.neocities.org/FUQuickGen/glyphs/w-119.svg").css("height", "12px")).append(" ");
	}
}