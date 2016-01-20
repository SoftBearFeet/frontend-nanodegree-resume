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

 for (job in work.jobs) {
  $("#workExperience").append("HTMLworkStart");

  var formattedEmployer = HTMLworkEmployer.replace("%data", work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle

  $(".work-entry:last").append(formattedEmployerTitle);
 }
