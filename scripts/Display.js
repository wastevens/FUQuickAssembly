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
	
	$("#speciesSkillNotes").text(npc.speciesSkillNotes);
	
	$("#roleAffinity").text("").append(npc.roleAffinityNotes.join("<br>"));
	$("#speciesAffinity").text("").append(npc.speciesAffinityNotes.join("<br>"));
	
	if(npc.role) {	
		if ($(".customization").length > npc.maxCustomizations) {
			modifications.resetCustomizations();
			$(".customization").remove();
		}
		for(let i=$(".customization").length;i<npc.maxCustomizations;i++) {
			addSelection(i, npc.role.customizations(), "customization", "customizations");
		}
		
		if ($(".roleSkill").length > npc.maxRoleSkills) {
			modifications.resetRoleSkills();
			$(".roleSkill").remove();
		}
		for(let i=$(".roleSkill").length;i<npc.maxRoleSkills;i++) {
			addSelection(i, npc.role.skills(), "roleSkill", "roleSkills");
		}
	}
	
	if($(".attack").length == 0) {
		npc.attacks.forEach(a => $("#attacks").append(a.display()));
	}
}

function addSelection(index, skillSource, rowClass, containerId) {
	const selectRow = $("<div>").addClass("row").addClass(rowClass);
	const selectDiv = $("<div>").addClass("col");
	const select = $("<select>");
	$(select).data('index', index);
	selectDiv.append(select);
	selectRow.append(selectDiv);
	Object.keys(skillSource).forEach(r => select.append($("<option>").attr("value", r).append(skillSource[r].name)));
	
	select.on('change', function (e) {
		const index = $(this).data('index');
		const prev = $(this).data('prev');
		const current = $(this).val();
		if(prev) {
			modifications[containerId][index].push(skillSource[prev].undo);
		}
		modifications[containerId][index].push(skillSource[current].apply);
		update();
	});
	$("#" + containerId).append(selectRow);
}