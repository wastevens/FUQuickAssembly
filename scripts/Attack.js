class Attack {
	constructor() {
		this.isMeleeOnly = false;
		this.name = "";
		this.attr1 = "";
		this.attr2 = "";
		this.accuracy = 0;
		this.baseDamage = 5;
		this.extraDamage = false;
		this.mods = [];
	}
	
	display() {
		const attackRow = $("<div>").addClass("row").addClass("attack");
		
		const glyphDiv = $("<div>").addClass("col-1").addClass("p-0").addClass("text-center");
		const meleeGlyph = $("<img>").attr("src", "glyphs/m-109.svg").css("height", "24px");
		const rangedGlyph = $("<img>").attr("src", "glyphs/r-114.svg").css("height", "24px");
		glyphDiv.append(meleeGlyph);
		if(!this.isMeleeOnly) {
			glyphDiv.append(" or ").append(rangedGlyph);
		}
		
		const basicDiv = $("<div>").addClass("col-5");
		const nameSpan = $("<span>").append(this.name);
		const accuracySpan = $("<span>").append("<b>[" + this.attr1 + " + " + this.attr2 + "]" + (this.accuracy != 0 ? " + " + this.accuracy : ""));
		const dmgSpan = $("<span>").append("<b>[HR + " + (this.baseDamage + (this.extraDamage ? 5 : 0)) +"]</b> (Type) damage");
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
		return $("<span>").addClass("p-0").append(" ").append($("<img>").attr("src", "glyphs/w-119.svg").css("height", "12px")).append(" ");
	}
}