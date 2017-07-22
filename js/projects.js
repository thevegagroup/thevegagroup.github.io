function getProjectRow(title, pm, team, description) {
	var htmlString = 
		   ['<div class="row">',
		    '  <div class="col-lg-12">',
		    '    <h5 class = "projectTitle">',
		          title,
		    '    </h5>',
		    '  </div>',
		    '  <div class="col-lg-12 projectTeam">',
		    '    <em class= "projectManager" title="Project Manager">' + pm + '</em>, ',team.join(', '),
		    '  </div>',
		    '  <div class="col-lg-12 projectDescription">',
		        description,
		    '  </div>',
		    '</div>'];
	return htmlString.join('\n');
}

function generateSemesterReport(title, projects) {
	var htmlOutput = []
	projects.forEach( function (project) {
		htmlOutput.push(getProjectRow(project.title, project.pm, project.team, project.description));
	});
	return htmlOutput.join('\n <hr> \n');

}

$.getJSON("../data/projects.json", function (json) {
	console.log('success');
	for (var key in json) {
		if (json.hasOwnProperty(key)) {
			document.getElementById(key).innerHTML = generateSemesterReport(json[key].semester, json[key].projects);
		}
	}
});