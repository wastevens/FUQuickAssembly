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
	
	if(npc.rank && npc.species && npc.role && npc.level) {
		$("#export").text(JSON.stringify(npc.fabulatorExport(), null, 2));
	}
}	

function updateAffinityDisplay() {
	updateAffinity("physical");
	updateAffinity("physical");
	updateAffinity("air");
	updateAffinity("bolt");
	updateAffinity("dark");
	updateAffinity("earth");
	updateAffinity("fire");
	updateAffinity("ice");
	updateAffinity("light");
	updateAffinity("poison");
}

function updateAffinity(affinity) {
	$("#" + affinity).text(npc[affinity].toUpperCase());
	$("div." + affinity).removeClass("bg-secondary-subtle").removeClass("disabled");
	if(!npc.enabled[affinity]) {
		$("div." + affinity).addClass("bg-secondary-subtle").addClass("disabled");
	}
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