/*
Template.
HeadLabs = {
    "title":
    "Role":
    "description":
    "image":
    "Body":
    "Hero":
}
*/
let Data = [
    RCCar = {
        "title": "4x4 in Schools",
        "description": "Between the years of 2015 - 2016 I took part in 4x4 in schools with the team making the international finals in 2016.",
        "iconImage" : "Images/portfolio/RCCar/RcCar_Small.jpg",
        "image": ["Images/portfolio/RCCar/1.jpg", "Images/portfolio/RCCar/2.jpg"],
        "Body": ["Creating, designing and 3d printing a steering, and suspension mechanism for the car",
            "Designing and iterating on gear box designs to improve on the torque being applied to the wheels",
            "Creating an electronics system capable of providing power to the wheels."],
        "Hero": '<iframe width = 100% height = "500vh" title="4x4 World Finals Car unexploded" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4d59c0446b694caaa2613083f8620559/embed"></iframe> <p> Interactive 3d model of the world final car.</p>'
    },

    HeadLabs = {
        "title": "Head Labs Internship",
        "Role": "Chief Technology Officer",
        "description": "An internship based around the construction of the Head Labs Drop Tower",
        "iconImage" : "Images/portfolio/HeadLabs/DropTowerSmall.JPG",
        "image": ["Images/portfolio/HeadLabs/DropTower.JPG", "Images/portfolio/HeadLabs/DropTowerCode.PNG", "Images/portfolio/HeadLabs/DropTowerCode2.PNG", "Images/portfolio/HeadLabs/VibratingBlock.PNG"],
        "Body": ["Designing and building the rails, hoisting drop system and electronics for the drop tower. Building a base that would allow the drop tower to resist up to 18 tonnes of force without damaging the impact sensors. ",
            "Coding the system such that it can capture data 2 million times a second from the available sensors.",
            "Optimizing the drop mass to minimise vibrations on impact"
        ],
        "Hero": null,
    },

    Steam = {
        "title": "Portable Steam Iron",
        "Role": " Chief Technology Officer",
        "description": "A project centred about designing, making and testing the world’s first truly portable battery powered steam iron.",
        "iconImage" : "Images/portfolio/Steam/Steam_small.jpg",
        "image": ["Images/portfolio/Steam/Steam.jpg", "Images/portfolio/Steam/Machining.jpg", "Images/portfolio/Steam/untitled.17.jpg", "Images/portfolio/Steam/arcetecture.jpg"],
        "Body": ["Designing, building and testing high current control circuitry. ",
            "Producing ergonomic forms for the outer casing in CAD for additive manufacture.",
            "Designing, simulating and machining a low voltage heating element for rapidly creating steam from water."
        ],
        "Hero": '<iframe width = 100% height = "500vh" title="Steam Iron" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/0b5cc50538564006b266958e57532669/embed"> </iframe>',
    },

    GenerativeArt = {
        "title": "Generative Art",
        "Role": "Artist",
        "description": "Using Javascript to randomly generate art based upon user input",
        "iconImage" : "Images/portfolio/Generation/Generate.JPG",
        "Body": ["Developing a web-based art generation project that utilizes a text input to dynamically generate visually captivating artwork.",
            "Implementing a cutting-edge algorithm that translates textual input into artistic representations, providing users with a unique and engaging visual experience.",
            "Successfully leveraging programming skills and creative thinking to create an interactive platform where users can witness the transformation of their words into beautiful and personalized art pieces.",
        ],
        "Hero": '<iframe width = "100%"  height="100%"   src="Images/portfolio/Generation/index.html"></iframe>'
    }, 
    Kickstarter = {
        "title": "Predicting Kickstarter Success",
        "Role": "Software development",
        "description": "Working with a small group on a Machine Learning Project, based around Kickstarter project titles. ",
        "iconImage" : "Images/portfolio/KickStarter/b812d5c9-288b-4436-8267-3496eccb7d65_rw_1200.jpg",
        "image": ["Images/portfolio/KickStarter/b812d5c9-288b-4436-8267-3496eccb7d65_rw_1200.jpg", "Images/portfolio/KickStarter/BigData.PNG"],
        "Body": ["Using a variety of machine learning and statistical models to try and predict a kickstarters campaigns chance of success",
            "Using Natural Language processing to analyse the title of the project.",
            "Analysing the data to gain insights on what lead to a successful project."
        ],
        "Hero": null,
    },

    Robot = {
        "title": "Connect 4 Robot",
        "Role": " Software development.",
        "description": "Training a robot arm so that it could play connect 4 against a human player",
        "iconImage" : "Images/portfolio/Robot/RobotSmall.jpg",
        "image": ["Images/portfolio/Robot/Gazebo_and_Rviz_side_by_side.png", "Images/portfolio/Robot/snapshot_one.png", "Images/portfolio/Robot/yellow_masks.png"],
        "Body": [
            "Using OpenCV to detect the location of the connect 4 tokens",
            "Creating smart motion plans using move it and various different motion planning algorithms.",
            "Working with gazebo to create accurate simulations of the system."
        ],
        "Hero": null,
    },

    Calendar = {
        "title": "IoT Calendar",
        "Role": "Lead design.",
        "description": "Working with low power IoT chips and electronics to design a system that can be successfully integrated into an existing calendar system.",
        "iconImage" : "Images/portfolio/Iot/EpaperSmall.JPG",
        "image": ["Images/portfolio/Iot/Epaper.JPG", "Images/portfolio/Iot/FritzigCircuit.PNG", "Images/portfolio/Iot/IOTCode.PNG"],
        "Body": ["Creating a circuit built around the ESP32 chip.",
            "Using Microsofts rest API to get data from Microsoft outlook calendar.",
            "Working with low power E paper displays to display data to the user."
        ],
        "Hero": null,
    },

    Bo = {
        "title": "Veteran Vehicle Motor Club",
        "Role": "Chairman",
        "description": "Reverse engineering parts and then redesigning for manufacture using modern manufacturing techniques.",
        "iconImage" : "Images/portfolio/Bo/35885741_2080500135552705_1354870780965421056_n.jpg",
        "image": ["Images/portfolio/Bo/35885741_2080500135552705_1354870780965421056_n.jpg", "Images/portfolio/Bo/A5Bo3.png", "Images/portfolio/Bo/NEC.jpg"],
        "Body": ["Creating an Annual Budget and financial documentation for yearly audits.",
            "Creating and updating Risk Assessments for club activities.",
            "Working with third parties in order to promote the vehicle to the largest audience possible."
        ],
        "Hero": null,
    },

    SelfBalancing = {
        "title": "Self balancing Dancing Robot",
        "Role": "Software engineering.",
        "description": "Creating a two-wheeled balancing robot capable of dancing in time with a song played from a speaker.",
        "image": null,
        "Body": ["Creating and tuning a PID controller capable of balancing the robot.",
            "Creating an algorithm capable of detecting the beat of a song.",
            "Using low level interrupts to get a consistent sampling rate."
        ],
        "Hero": null,
    },

    Polaris = {
        "title": "Polaris modern day day-shapes",
        "Role": "Electrical and Mechanical Engineer.",
        "description": "Working within a small group to create a high-level concept for brining inter-ship communication into the 21st century.",
        "iconImage" : "Images/portfolio/Polaris/MainAssembly.jpg",
        "image": ["Images/portfolio/Polaris/MainAssembly.jpg", "Images/portfolio/Polaris/MainAssembly2.png"],
        "Body": [
            "Using a system of polarising filters to create an image with very little power.",
            "Designing a system capable of being integrating into existing ship systems.",
            "Creating a tough mechanical design capable of withstanding large amounts of wind."
        ],
        "Hero":'<iframe width = 100% height = "500vh" title="Polaris Inital Design." frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/863b26d8de484acea869f0b6349aaa3a/embed"> </iframe>',
    },
]