function updateDisplay() {
	$("#dex").text("d" + npc.dex);
	$("#ins").text("d" + npc.ins);
	$("#mig").text("d" + npc.mig);
	$("#wlp").text("d" + npc.wlp);
	
	$("#hp").text(npc.hp + " * " + (npc.hp / 2));
	$("#mp").text(npc.mp);
	$("#def").text("+" + npc.def);
	$("#mdef").text("+" + npc.mdef);
	
	updateAffinityDisplay();
	
	$("div.physical").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.air").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.bolt").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.dark").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.earth").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.fire").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.ice").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.light").removeClass("bg-secondary-subtle").removeClass("disabled");
	$("div.poison").removeClass("bg-secondary-subtle").removeClass("disabled");
	
	if(!npc.enabled.physical) {
		$("div.physical").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.air) {
		$("div.air").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.bolt) {
		$("div.bolt").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.dark) {
		$("div.dark").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.earth) {
		$("div.earth").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.fire) {
		$("div.fire").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.ice) {
		$("div.ice").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.light) {
		$("div.light").addClass("bg-secondary-subtle").addClass("disabled");
	}
	if(!npc.enabled.poison) {
		$("div.poison").addClass("bg-secondary-subtle").addClass("disabled");
	}
	
	$("#statusNotes").text("").append(npc.statusNotes.join("<br>"));
	
	$("#weakAffinity").text("").append(npc.weakAffinityNotes.join("<br>"));
	$("#strongAffinity").text("").append(npc.strongAffinityNotes.join("<br>"));
	
	$(".attack").remove();
	npc.attacks.forEach(a => $("#attacks").append(a.display()));
	
	$("#maxCustomizations").text(npc.maxCustomizations);
	$("#maxRoleSkills").text(npc.maxRoleSkills);
	$("#maxSpells").text(npc.maxSpells);
	
	$("#maxSpeciesSkills").text(npc.maxSpeciesSkills);
	$("#speciesSkillNotes").text(npc.speciesSkillNote);
	
	$("#spellNotes").text(npc.spellNotes);
	
	if(npc.role) {
		updateSelections(npc.role.customizations(), npc.customizations, npc.maxCustomizations, "customization", "customizations");
		updateSelections(npc.role.skills(), npc.roleSkills, npc.maxRoleSkills, "roleSkill", "roleSkills");
		updateSelections(npc.role.spells(), npc.spells, npc.maxSpells, "spell", "spells");
	}
	
	if(npc.species) {
		updateSelections(npc.species.skills(), npc.speciesSkills, npc.maxSpeciesSkills, "speciesSkill", "speciesSkills");
	}
	$("div.fixedSpell").remove();
	npc.fixedSpells.forEach(s => addFixed(s, "fixedSpell", "spells"));
}	

function updateAffinityDisplay() {
	$("#physical").text(npc.physical.toUpperCase());
	$("#air").text(npc.air.toUpperCase());
	$("#bolt").text(npc.bolt.toUpperCase());
	$("#dark").text(npc.dark.toUpperCase());
	$("#earth").text(npc.earth.toUpperCase());
	$("#fire").text(npc.fire.toUpperCase());
	$("#ice").text(npc.ice.toUpperCase());
	$("#light").text(npc.light.toUpperCase());
	$("#poison").text(npc.poison.toUpperCase());
}

function updateSelections(source, collection, maxCount, rowClass, containerId) {
	let currentCount = $("div." + rowClass).length;
	if(currentCount > maxCount) {
		$("div." + rowClass).remove();
		collection = [];
		currentCount = 0;
	}
	for(let i=currentCount;i<maxCount;i++) {
		addSelection(source, rowClass, containerId);
	}
}

function addSelection(source, rowClass, containerId) {
	const selectRow = $("<div>").addClass("row").addClass(rowClass);
	const selectDiv = $("<div>").addClass("col");
	const select = $("<select>").addClass(rowClass);
	select.on("change", update);
	selectDiv.append(select);
	selectRow.append(selectDiv);
	Object.keys(source).forEach(r => select.append($("<option>").attr("value", r).append(source[r].name)));
	
	$("#" + containerId).append(selectRow);
}

function addFixed(value, rowClass, containerId) {
	const spanRow = $("<div>").addClass("row").addClass(rowClass);
	const spanDiv = $("<div>").addClass("col");
	const span = $("<span>").addClass(rowClass).text(value);
	
	spanDiv.append(span);
	spanRow.append(spanDiv);
	
	$("#" + containerId).append(spanRow);
}