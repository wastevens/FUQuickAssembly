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
	
	$("#roleAffinity").text("").append(npc.roleAffinityNotes.join("<br>"));
	$("#speciesAffinity").text("").append(npc.speciesAffinityNotes.join("<br>"));
	
	
	$(".attack").remove();
	npc.attacks.forEach(a => $("#attacks").append(a.display()));
	
	$("#maxCustomizations").text(npc.maxCustomizations);
		
	$("#maxRoleSkills").text(npc.maxRoleSkills);
	
	$("#maxSpeciesSkills").text(npc.maxSpeciesSkills);
	$("#speciesSkillNotes").text(npc.speciesSkillNote);
	
	
	if(npc.role) {
		let currentCount = $("div.customization").length;
		if(currentCount > npc.maxCustomizations) {
			$("div.customization").remove();
			npc.customizations = [];
			currentCount = 0;
		}
		for(let i=currentCount;i<npc.maxCustomizations;i++) {
			addSelection(npc.role.customizations(), "customization", "customizations");
		}
		
		currentCount = $("div.roleSkill").length;
		if(currentCount > npc.maxRoleSkills) {
			$("div.roleSkill").remove();
			npc.roleSkills = [];
			currentCount = 0;
		}
		for(let i=currentCount;i<npc.maxRoleSkills;i++) {
			addSelection(npc.role.skills(), "roleSkill", "roleSkills");
		}
	}
	
	if(npc.species) {
		let currentCount = $("div.speciesSkill").length;
		if(currentCount > npc.maxSpeciesSkills) {
			$("div.speciesSkill").remove();
			npc.speciesSkills = [];
			currentCount = 0;
		}
		for(let i=currentCount;i<npc.maxSpeciesSkills;i++) {
			addSelection(npc.species.skills(), "speciesSkill", "speciesSkills");
		}
	}
}

function updateSelections(source, rowClass, containerId) {
	let currentCount = $("div." + rowClass).length;
	if(currentCount > npc.maxSpeciesSkills) {
		$("div." + rowClass).remove();
		npc.speciesSkills = [];
		currentCount = 0;
	}
	for(let i=currentCount;i<npc.maxSpeciesSkills;i++) {
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