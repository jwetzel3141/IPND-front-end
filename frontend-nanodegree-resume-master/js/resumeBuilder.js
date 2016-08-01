//////////////////////////////////////////////////////////////
// 8-01-2016. Jason.wetzel@live.com. Final project for IPND.//
// thanks to http://jsbeautifier.org/                       //
//////////////////////////////////////////////////////////////
var bio = {
    "name": "Jason D Wetzel",
    "role": "Member of Technical Staff",
    "contacts": {
        "mobile": "425-780-5007",
        "email": "Jason.wetzel@live.com",
        "github": "jwetzel3141",
        "location": "Redmond, WA",
        "twitter": "jwetzel3141"
    },
    "welcomeMessage": "Primum non novere. First, do no harm. --Hippocrates",
    "skills": ["Poignant Sarcasm", "Delightful Analogies", "Expert-level classical piano playing", "Coffee Shop Patronage", "Enthusiastic Wine Tasting", "Generic Stoicism"],
    "biopic": "https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/jw015c_11-2015b.jpg?raw=true"
}; //var bio

var work = {
    "jobs": [{
        "employer": "AT&T Labs",
        "title": "Principle Product Development Engineer",
        "dates": "July 2010 - present",
        "location": "Redmond, WA",
        "description": "My main responsibility is network monitoring and probe aggregation infrastructure. But I also manage the vendors and suppliers who help me get the job done. I work with supply chain to get maintenance and support contracts in location, I write POs, approve invoices, and I also work with the project teams to help them get the most bang for their buck when it comes to packet capture."
    }, {
        "employer": "T-Mobile",
        "title": "Senior Network Engineer",
        "dates": "April 2004 - July 2010",
        "location": "Bellevue, WA",
        "description": "This position is with the T-mobile Equipment and Transport Integration team. My work centers around high-capacity links between T-mobile locations.  I work with SONET and GigE equipment:  Cisco, Alcatel, and Tellabs gear mostly.  I fit in the gray area between the data people and the voice people."
    }, {

        "employer": "NEC BNS",
        "title": "Network Support Engineer",
        "dates": "June 2003 - January 2004",
        "location": "Irving, TX",
        "description": "This position was as an ersatz Cisco TAC engineer.  Companies would hire NEC to design, monitor, and troubleshoot their networks.  As a Cisco Gold partner, NEC had a team of engineers dedicated to a growing customer base of government and educational customers as well as several small businesses."
    }, {
        "employer": "ADC Telecommunications",
        "title": "Senior Systems Engineer",
        "dates": "January 2000 - October 2002",
        "location": "Richardson, TX",
        "description": "In this position I offered systems integration and customer pre-sales support for a variety of ADC's products.  This included SONET, ATM, Frame Relay, TDM, and access concentrators, as well as a multi-media gateway."

    }, {
        "employer": "Texas Instruments",
        "title": "Product Engineer",
        "dates": "November 1995 - August 1998",
        "location": "Dallas, TX",
        "description": "This position was related to the test and productizing of ATM chipsets."
    }],
}; //var work

var projects = {
    "projects": [{
        "title": "Ethernet Redesign",
        "dates": "September 2009 - October 2011",
        "description": "Upgrading core network from OTN to Ethernet.  Long term project involving refined technical specification, transport routing validation, procurement and implementation nationwide for company switch locations.",
        // "images": ["A1", "A2"]
        "images": ["https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/ethernet.png?raw=true",
            "https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/fiber.png?raw=true"
        ]
    }, {
        "title": "JDSU and Netscout buildout",
        "dates": "2012-2014",
        "description": "Created a packet capture network for the Redmond labs. Includes over 5,000 fiber-optic tapping points for the mobility network labs.",
        // "images": ["B1", "B2"]
        "images": ["https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/JDSU.png?raw=true",
            "https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/capture.png?raw=true",
            "https://github.com/jwetzel3141/IPND-front-end/blob/master/frontend-nanodegree-resume-master/images/ethernet.png?raw=true"
        ]
    }, ]
}; //var projects

var education = {
    "schools": [{
        "name": "Seattle University",
        "location": "Seattle, WA",
        "degree": "Bachelor of Science",
        "majors": ["Physics", " Math"],
        "dates": "1987-1991",
        "url": "http://www.seattleu.edu"
    }, {
        "name": "University of Dayton",
        "location": "Dayton, OH",
        "degree": "Master of Science",
        "majors": ["Electro-Optical Engineering", " Laser Physics"],
        "dates": "1991-1993",
        "url": "http://www.udayton.edu"
    }],
    "onlineCourses": [{
        "title": "Intro programming nano-degree",
        "school": "Udacity",
        "dates": "2016-Present",
        "url": "http://udacity.com"
    }, {
        "title": "Introductory Python",
        "school": "Coursera.org",
        "dates": "Jan, 2015 - June 2015",
        "url": "http://Coursera.com"
    }]
}; //var education

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").prepend(formattedName, formattedRole);
    $('#header').append(formattedBiopic, formattedWelcome, HTMLskillsStart);
    //skills loop below
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
    $('#topContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
    $('#footerContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedTwitter, formattedMobile);
};

work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {
        // console.log(work.jobs.length);
        var formattedName = HTMLschoolName.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedName);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedworkDescription);
    } //for loop on jobs
}; // work.display function

projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        //looping through the project images. Different style than done with skills.
        for (var image in projects.projects[i].images) {
            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
            $(".project-entry:last").append(formattedprojectImage);
        }
    }
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        //console.log(education.schools.length);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        // var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajors);

    } //for loop on schools

    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
    } //for loop on onlineCourses
};

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);