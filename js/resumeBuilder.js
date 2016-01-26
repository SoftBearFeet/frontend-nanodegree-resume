var bio = {
  "name" : "Mark Schneider",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "907-xxx-xxxx",
    "email" : "example@gmail.com",
    "github" : "https://github.com/SoftBearFeet",
    "location" : "Alaska"
  },
  "welcomeMessage" : "Hello and welcome to my interactive Resume Webpage",
  "skills" : [
    "Technical Support", "HTML/CSS/JS", "Python", "Communication", "Learning"
  ],
  "biopic" : "images/sM&kids.jpg"
}

var work = {
  "jobs" : [
    {
     "employer" : "Alaska Communications",
     "title" : "IT Operations",
     "location" : "Alaska",
     "dates" : "2012 - Present",
     "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "IT Helpdesk",
    "location" : "Alaska",
    "dates" : "2011 - 2012",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "IT Tech Support II / Coordinator",
    "location" : "Alaska",
    "dates" : "2009 - 2012",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "Customer Support II",
    "location" : "Alaska",
    "dates" : "2008 - 2009",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Fast Fix Jewelry",
    "title" : "Jeweler / Administrator",
    "location" : "Alaska",
    "dates" : "2008 - 2008",
    "description" : "description of job goes here."
   },
   {
    "employer" : "CompUSA",
    "title" : "Service Advisor",
    "location" : "Alaska",
    "dates" : "2006 - 2007",
    "description" : "description of job goes here."
   }
  ]
}

var projects = {
    "projects" : [
     {
      "title" : "Sample Project 1",
      "dates" : "2016",
      "description" : "description of project goes here.",
      "images" : "either a string goes here or an array of the image."
     },
     {
      "title" : "Sample Project 2",
      "dates" : "2016",
      "description" : "description of project goes here.",
      "images" : "either a string goes here or an array of the image."
     }
    ]
}


// Testing stuff below (If Statements):

if (bio.skills.length > 0) {

 $("#header").append(HTMLskillsStart);

 var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 $("#skills").append(formattedSkill);

 formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 $("#skills").append(formattedSkill);

 formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 $("#skills").append(formattedSkill);

 formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 $("#skills").append(formattedSkill);
}


//More testing below (For-In Loops):
  function displaywork() {

   for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedWorkDescription);
   }
  }

  displaywork();

//Click function test:
  $(document).click(function(loc) {
    var xLoc = loc.pageX;
    var yLoc = loc.pageY;
    logClicks(xLoc, yLoc);
  });

//Internationalizte Name Button:

  function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
  };

 $("#main").append(internationalizeButton);

//Encapsulation Function for Projects.Display:
  projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (project in projects.projects) {

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

      var formattedDesription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)

      $(".project-entry").append(formattedTitle);

      $(".project-entry").append(formattedDates);

      $(".project-entry").append(formattedDesription);
    };
  }

  projects.display();

// Google Map:

 $("#mapDiv").append(googleMap);
