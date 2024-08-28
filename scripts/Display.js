function updateDisplay() {
	$("#dex").text("d" + npc.dex);
	$("#ins").text("d" + npc.ins);
	$("#mig").text("d" + npc.mig);
	$("#wlp").text("d" + npc.wlp);
	
	$("#hp").text(npc.hp + " * " + (npc.hp / 2));
	$("#mp").text(npc.mp);
	$("#def").text("+" + npc.def);
	$("#mdef").text("+" + npc.mdef);
	
	$("#physical").text(npc.physical);
	$("#air").text(npc.air);
	$("#bolt").text(npc.bolt);
	$("#dark").text(npc.dark);
	$("#earth").text(npc.earth);
	$("#fire").text(npc.fire);
	$("#ice").text(npc.ice);
	$("#light").text(npc.light);
	$("#poison").text(npc.poison);
	
	$("#statusNotes").text("").append(npc.statusNotes.join("<br>"));
	
	$("#roleAffinity").text("").append(npc.roleAffinityNotes.join("<br>"));
	$("#speciesAffinity").text("").append(npc.speciesAffinityNotes.join("<br>"));
	
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