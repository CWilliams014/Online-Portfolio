
/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var awesomeThoughts = "I am Cole and I am awesome";
 console.log(awesomeThoughts)

 var funThoughts = awesomeThoughts.replace("awesome", "fun");

 $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%", "Cole Williams");
 
 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var kArray = ["mcgyber", "jordan"];
 $("#main").append(kArray.length);

 var bio = {"name" : "Cole",
 		"role" : "Web Developer",
 		"contact" : "Cowi4030@colorado.edu",
 		"picture" : "/Users/williamsch/Downloads/frontend-nanodegree-resume-master/images/js.jpg",
 		"welcome_message" : "Hi! I'm Cole",
 		"skills" : ["HTML", "CSS", "Python", "JavaScript", 
 			"Teaching"]
};
$("#main").append(bio.name[0]);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.picture);
$("#main").append(bio.welcome_message);
$("#main").append(bio.skills);



/*var work = {};
work.position = "Shipping Coordinator";
work.employer = "Motorola";
work.years = "> 1 year"
work.city = "Denver, CO";

var education = {};
education["name"] = "University of Colorado at Boulder";
education["years"] = "2010 - 2014";
education["city"] = "Boulder, CO";

$(#"main").append(work["position"]);
$(#"main").append(education.name); */

// below is JSON notation

var education = {		//education = object
	"schools" : [			// schools array
	{
		"name" : "University of Colorado at Boulder",
		"location" : "Boulder, CO",
		"degree" : "Bachelors",				//school object
		"major" : "Economics",
		"minor" : "business",
		"graduation" : 2014,
		"url" : "http://www.colorado.edu/economics/"
	},
	{
		"name" : "The Language House",
		"location" : "Prague, Czech Republic",
		"degree" : "TEFL certification",		//school object
		"dates" : "August 2014",
		"url" : "http://www.thelanguagehouse.net/"
	}
	],
	"OnlineCourses" : [
	{
		"title" : "Intro to Computer Programming",
		"school" : "Udacity",
		"dates" : 2015,					// this online course
		"url" : "www.udacity.com"		//is an object of the
										//online courses array
	}
	]
}

/// ^ VALIDATED 

var work = {
	"jobs" : [
		{
			"employer" : "Caledonian Language School",
			"title" : "In-Company Teacher",
			"location" : "Prague, Czech Republic",
			"dates" : "August 2014 - september 2015",
			"description" : "30+ hours of weekly teaching in-company classes with up to 10 adults and children of all ability levels various topics."
		},
		{
			"employer" : "Motorola Solutions Inc",
			"title" : "Shipping Coordinator",
			"location" : "Denver, CO",
			"dates" : "January 2016 - Present",
			"description" : "Manage and coordinate incoming and outgoing shipments. During down-time practice coding(~5 hrs/day)"
		},
		{
			"employer" : "Novinda Corportation",
			"title" : "Direct Marketing Data Base Specialist",
			"location" : "Boulder, CO",
			"dates" : "2012 - 2014", 
			"description" : "Management and analysis of direct marketing databases supporting marketing and sales teams exclusively through MS Excel"

		
		}
	]
}

///^ VALIDATED 

var projects = {
	"projects" : [
	{
		"title" : "Recent Economic Reflection",
		"dates" : "December 2015",
		"description" : "Why current economic curriculums are fundamentally flawed",
		"images" : ["/Users/williamsch/Pictures/Recent Economic Reflection_3.png",
			"/Users/williamsch/Pictures/Recent Economic Reflection_2.png",
			
			"/Users/williamsch/Pictures/Recent Economic Reflection_1.png"
		]
	}

	]
};
console.log("before");
projects.display = function() {
	console.log("b4 for");
	for(project in projects.projects) { 
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) { 
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				
			}
		} 
		
	}
};

projects.display();


if (bio.skills.length > 0 ){
	$('#header').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
}
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
}

}
displayWork();
//for (job in work.jobs){
//	$("#workexperience").append(HTMLworkStart);
	//var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//	var formattedDates = HTMLworkLocation.replace("%data%", work.jobs[job].dates);
//	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name [1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
