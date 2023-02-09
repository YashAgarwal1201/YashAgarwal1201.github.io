
var education = {
    1: {
        heading: "May, 2016",
        value: "Completed 10th standard from Modern Era Public School, Bijnor",
        links: ""
    },
    2: {
        heading: "May, 2018",
        value: "Completed 12th standard from Modern Era Public School, Bijnor",
        links: ""
    },
    3: {
        heading: "August, 2018",
        value: "Started Under-Graduation at DIT University, Dehradun",
        links: ""
    },
    4: {
        heading: "2020 - 2021",
        value: "A study project for understanding implementation of facial recognition in attendance systems (Role: Group Manager).",
        links: ""
    },
    5: {
        heading: "2022",
        value: "'RON - a frinedly chabot', an academic project using both face recognition and speech recognition to make a friendly chatbot.\
                (Role: Group Leader).",
        links: ""
    },
    6: {
        heading: "June, 2022",
        value: "Graduated from DIT University, Dehradun. Received Degree of completion in October, 2022.",
        links: ""
    },
    7: {
        heading: "2022 (Not under active development)",
        value: "TvMovieDb - A TV Shows & Movies Database web app using google sheets and glide (Role: Developer).",
        links: "https://legoyashx2.glideapp.io/"
    },
    8: {
        heading: "2022 - ongoing (on hold)",
        value: "Blueberry - Speech Recognition chatbot project (Role: Developer).",
        links: ""
    }
} 

var certif = {
    1: {
        heading: "December, 2022",
        value: "\u2022 Internship at \"Techolution India Pvt. Ltd.\"",
        links: ""
    },
    2: {
        heading: "October, 2022",
        value: "\u2022 Received \"Degree of Bachelor of Technology in Computer Science and Engineering\" from DIT University, Dehradun.\n\
            \u2022 Completed Certification titled \"React JS\" on Great Learning Academy.\n\
            \u2022 Completed Certifications titled \"Introduction to Microsoft Excel\" and \"Using Basic Formulas and Functions in Microsoft Excel\" on Coursera.",
        links: ""    
    },
    3: {
        heading: "August, 2022",
        value: "\u2022 Completed Certifications for \"Command Line in Linux\" and \"Introduction to Bash Shell Scripting\" on Coursera.\n\
            \u2022 Received \"Canva 100 design Milestone\" certificate from Canva.\n\
            \u2022 Completed certification for \"Web Scraping with Python\" on Great Learning Academy.",
        links: ""    
    },
    4: {
        heading: "July, 2022",
        value: "\u2022 Completed certification for \"UI/UX\" on Great Learning Academy.",
        links: ""
    },
    5: {
        heading: "June, 2022",
        value: "\u2022 Published article titled \"RON - (a friendly chatbot)\" on IJSREM.",
        links: ""
    },
    6: {
        heading: "January, 2022",
        value: "\u2022 Received \"Canva 50 design Milestone\" certificate from Canva.",
        links: ""
    },
    7: {
        heading: "October, 2021",
        value: "\u2022 Completed certifications for \"PHP\" on Great Learing Academy.",
        links: ""
    },
    8: {
        heading: "September, 2021",
        value: "\u2022 Completed certifications for \"Introduction to Javascript\" and \"jQuery Tutorial\" on Great Learing Academy.",
        links: ""
    },
    9: {
        heading: "July, 2020",
        value: "\u2022 Completed certification for \"Crash course on Python by Google\" on Coursera.\n\
            \u2022 Completed certification for \"Introduction to HTML5 by University of Michigan\" on Coursera."
    }
}

var contact = {
    1: {
        heading: "My E-mail address",
        value: "You can e-mail me @ legoyashx@hotmail.com",
        links: ""
    },
    2: {
        heading: "My Github Account",
        value: "Link to my Github Account",
        links: "https://github.com/YashAgarwal1201"
    },
    3: {
        heading: "Link to my LinkedIn",
        value: "Click here to check out my LinkedIn profile",
        links: "https://www.linkedin.com/in/yash-a-a669b2237"
    },
    4: {
        heading: "My Resume",
        value: "Click here to download my resume",
        links: ""
    },
    5: {
        heading: "On Telegram",
        value: "Click here to connect on Telegram",
        links: "https://t.me/legoyashx"
    }
}

export var about = {
    title: "about",
    imagePath: "./images/Bio.png",
    content: {
        aboutMe: {
            btnTitle: "About Me",
            heading: "About me",
            subContent: ['Hello there!', 'Want to know about me ?<br>Check this cool animation',
                'What\'s my name?', 'My name is Yash Agarwal', 'When was I born?', '12th of January, 2000', 
                'About my Graduation ?', 'Well I started my graduation at DIT University in year 2018. \
                I started my Bachelor of Technology program in Civil Engineering but before the start of Year 2, I realised my \
                passion and interest for technology and then I switched to Computer Science & Engineering.', 
                '...During my graduation... to be continued']
        },
        education: {
            btnTitle: "Education",
            heading: "Education & Projects",
            subContent: education
        },
        certifications: {
            btnTitle: "Certifications & Achievements",
            heading: "Certifications & Achievements",
            subContent: certif
        },
        contact: {
            btnTitle: "Contact",
            heading: "Contact",
            subContent: contact
        },
        resume: {
            btnTitle: "Resume",
            subContent: null
        }
    }
}

export const aboutFn = () => {
    /*const typeit = new TypeIt('#about-me-content-id', {
		strings: ['Hello there!', 'Want to know about me ?<br>Check this cool animation',
			'What\'s my name?', 'My name is Yash Agarwal', 'When was I born?', '12th of January, 2000', 
			'About my Graduation ?', 'Well I started my graduation at DIT University in year 2018. \
			I started my Bachelor of Technology program in Civil Engineering but before the start of Year 2, I realised my \
			passion and interest for technology and then I switched to Computer Science & Engineering.', 
			'...During my graduation... to be continued'],
		speed: 150,
		deleteSpeed: 100,
		lifeLike: true,
		cursor: true,
		cursorSpeed: 1000,
		breakLines: false,
		startDelay: 250,
		loop: false,
		waitUntilVisible: true,
		nextStringDelay: 250,
		loopDelay: 100,
	})*/
	/*$('#bio1').hover(() => {
		typeit.go()
		if(typeit.is('frozen'))
			typeit.unfreeze()
	}, () => {
		if(typeit.is('started'))
			typeit.freeze()
		else
			typeit.reset()
	})*/
    return 99//typeit
}