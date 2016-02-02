var bio = {
    "name": "Mark Schneider",
    "role": "Web Developer",
    "contacts": {
        "mobile": "907-xxx-xxxx",
        "email": "example@gmail.com",
        "github": "https://github.com/SoftBearFeet",
        "location": "Anchorage, AK"
    },
    "welcomeMessage": "Hello and welcome to my interactive Resume Webpage",
    "skills": [
        "Technical Support", "HTML/CSS/JS", "Python", "Communication", "Learning"
    ],
    "biopic": "images/sM&kids.jpg"
};
var education = {
    "schools": [
        {
            "name": "Robert Service High School",
            "degree": "High School Diploma",
            "location": "Anchorage, AK",
            "majors": "High School Diploma",
            "dates": "2008",
            "url": "http://www.asdk12.org/aboutschools/service/schoolname,3120,en.html"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2016 - Present",
            "url": "https://www.udacity.com/"
        }
    ]
};
var work = {
    "jobs": [
        {
            "employer": "Alaska Communications",
            "title": "IT Operations",
            "location": "Anchorage, AK",
            "dates": "2012 - Present",
            "description": "description of job goes here."
        },
        {
            "employer": "Alaska Communications",
            "title": "IT Helpdesk",
            "location": "Anchorage, AK",
            "dates": "2011 - 2012",
            "description": "description of job goes here."
        },
        {
            "employer": "Alaska Communications",
            "title": "IT Tech Support II / Coordinator",
            "location": "Anchorage, AK",
            "dates": "2009 - 2012",
            "description": "description of job goes here."
        },
        {
            "employer": "Alaska Communications",
            "title": "Customer Support II",
            "location": "Anchorage, AK",
            "dates": "2008 - 2009",
            "description": "description of job goes here."
        },
        {
            "employer": "Fast Fix Jewelry",
            "title": "Jeweler / Administrator",
            "location": "Anchorage, AK",
            "dates": "2008 - 2008",
            "description": "description of job goes here."
        },
        {
            "employer": "CompUSA",
            "title": "Service Advisor",
            "location": "Anchorage, AK",
            "dates": "2006 - 2007",
            "description": "description of job goes here."
        }
    ]
};
var projects = {
    "projects": [
        {
            "title": "Responsive Wed Design",
            "dates": "2016",
            "description": "description of project goes here.",
            "images": "images/Project1_1.PNG"
        }
    ]
};
// Code to have Name/Role display:
function displayBio() {
    "use strict";
    var formattedName, formattedRole, formattedMain, formattedBioPic, formattedWelcomeMsg;
    formattedName = HTMLheaderName.replace("%data%", bio.name);
    formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    formattedMain = formattedName + formattedRole;
    formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedMain);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
}
displayBio();
// Code to have Contact Info be displayed, wanted to try creating a function:
function displayContact() {
    "use strict";
    var formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedContact;
    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
}
displayContact();
// Code to have Skills displayed:
function displaySkills() {
    "use strict";
    $("#header").append(HTMLskillsStart);
    var skill, formattedSkill;
    for (skill in bio.skills) {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}
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
    "use strict";
    var job, formattedEmployer, formattedTitle, formattedEmployerTitle, formattedWorkDates, formattedWorkDescription;
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displaywork();
//Click function test:
$(document).click(function (loc) {
    "use strict";
    var xLoc, yLoc;
    xLoc = loc.pageX;
    yLoc = loc.pageY;
    logClicks(xLoc, yLoc);
});
/*Internationalizte Name Button:
  function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
  };
 $("#main").append(internationalizeButton);*/

//Encapsulation Function for Projects.Display:
function projectsdisplay() {
    "use strict";
    var project, formattedTitle, formattedDates, formattedDesription, pic, formattedPic;
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects) {
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        formattedDesription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        formattedPic = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDesription);
        $(".project-entry:last").append(formattedPic);
    }
}
projectsdisplay();
// Code to have education display:
function displayEducation() {
    "use strict";
    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineStart);
    var school, formattedName, formattedDegree, formattedDate, formattedLocation, formattedMajor, formattedNameDegree, online, formattedSchool, formattedDates, formattedUrl, formattedNameSchool;
    for (school in education.schools) {
        formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        formattedNameDegree = formattedName + formattedDegree
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    for(online in education.onlineCourses) {
        formattedName = HTMLonlineTitle.replace("#", education.onlineCourses[online].url).replace("%data%", education.onlineCourses[online].title);
        formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        formattedNameSchool = formattedName + formattedSchool;
        $(".online-entry:last").append(formattedNameSchool);
        $(".online-entry:last").append(formattedDates);
        $(".online-entry:last").append(formattedUrl);
    }
}
displayEducation();
// Google Map:
$("#mapDiv").append(googleMap);
