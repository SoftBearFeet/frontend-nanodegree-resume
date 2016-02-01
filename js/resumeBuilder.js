var bio = {
  "name" : "Mark Schneider",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "907-xxx-xxxx",
    "email" : "example@gmail.com",
    "github" : "https://github.com/SoftBearFeet",
    "location" : "Anchorage, AK"
  },
  "welcomeMessage" : "Hello and welcome to my interactive Resume Webpage",
  "skills" : [
    "Technical Support", "HTML/CSS/JS", "Python", "Communication", "Learning"
  ],
  "biopic" : "images/sM&kids.jpg"
}

var education = {
  "schools": [
   {
     "name": "Robert Service High School",
     "degree": "High School Diploma",
     "location": "Anchorage, AK",
     "majors": "High School Diploma",
     "dates": "2008",
     "url": "http://www.asdk12.org/aboutschools/service/schoolname,3120,en.html"
    }],
  "onlineCourses": [
   {
     "title": "Front-End Web Developer Nanodegree",
     "school": "Udacity",
     "date": "2016 - Present",
     "url": "https://www.udacity.com/"
    }]
}

var work = {
  "jobs" : [
    {
     "employer" : "Alaska Communications",
     "title" : "IT Operations",
     "location" : "Anchorage, AK",
     "dates" : "2012 - Present",
     "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "IT Helpdesk",
    "location" : "Anchorage, AK",
    "dates" : "2011 - 2012",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "IT Tech Support II / Coordinator",
    "location" : "Anchorage, AK",
    "dates" : "2009 - 2012",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Alaska Communications",
    "title" : "Customer Support II",
    "location" : "Anchorage, AK",
    "dates" : "2008 - 2009",
    "description" : "description of job goes here."
   },
   {
    "employer" : "Fast Fix Jewelry",
    "title" : "Jeweler / Administrator",
    "location" : "Anchorage, AK",
    "dates" : "2008 - 2008",
    "description" : "description of job goes here."
   },
   {
    "employer" : "CompUSA",
    "title" : "Service Advisor",
    "location" : "Anchorage, AK",
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

// Code to have Name/Role display:
 function displayBio() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMain = formattedName + formattedRole;
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  console.log(formattedMain);
  $("#header").prepend(formattedMain);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
};

displayBio();
// Code to have Contact Info be displayed, wanted to try creating a function:

function displayContact() {

  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

  $("#topContacts").append(formattedContact)


};

displayContact();
// Code to have Skills displayed:

function displaySkills() {

 $("#header").append(HTMLskillsStart);

 for(skill in bio.skills) {

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);
 }
};

displaySkills();
// Testing stuff below (If Statements):

 /*if (bio.skills.length > 0) {

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
*/


//More testing below (For-In Loops):
  function displaywork() {

   for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

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

      var formattedDesription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

      $(".project-entry").append(formattedTitle);

      $(".project-entry").append(formattedDates);

      $(".project-entry").append(formattedDesription);
    };
  }

  projects.display();

// Code to have education display:

function displayEducation() {

 $("#education").append(HTMLschoolStart);

 for(school in education.schools){

  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);

  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

  var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);

  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

  var formattedNameDegree = formattedName + formattedDegree

  $(".education-entry:last").append(formattedNameDegree);

  $(".education-entry:last").append(formattedDate);

  $(".education-entry:last").append(formattedLocation);

  $(".education-entry:last").append(formattedMajor);

 };

 $(".education-entry").append(HTMLonlineClasses);

 for(online in education.onlineCourses) {

  var formattedName = HTMLonlineTitle.replace("#", education.onlineCourses[online].url).replace("%data%", education.onlineCourses[online].title);

  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);

  var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);

  var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

  var formattedNameSchool = formattedName + formattedSchool;

  $(".education-entry:last").append(formattedNameSchool);

  $(".education-entry:last").append(formattedDates);

  $(".education-entry:last").append(formattedUrl);

 };

}

displayEducation();

// Google Map:

 $("#mapDiv").append(googleMap);
