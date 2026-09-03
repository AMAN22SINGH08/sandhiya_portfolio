/**
 * SANIDHYA SHARMA - PORTFOLIO DATA CONFIGURATION
 * ----------------------------------------------------
 * All personal, educational, technical, and project data
 * strictly adheres to verified user specifications.
 */

export const portfolioData = {
  personal: {
    name: "Sanidhya Sharma",
    role: "Computer Science & Engineering Student",
    subRole: "Aspiring Software Developer",
    statusBadge: "Open to opportunities",
    headline: "Building the future, one line of code at a time.",
    subHeadline: "Computer Science & Engineering student exploring software development, AI, and technology.",
    institution: "Lovely Professional University, Punjab, India",
    homeTown: "Kullu, Himachal Pradesh, India",
    // Contact channels - customize handles as needed
    email: "sanidhya.sharma.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanidhya-sharma",
    github: "https://github.com/sanidhya-sharma",
    // Dedicated slot for profile photo
    profileImage: "/sanidhya-sharma.jpg",
  },

  about: {
    missionCallout: "SYSTEM BRIEFING // CS & ENG TRAJECTORY",
    bioParagraphs: [
      "I am a Computer Science & Engineering undergraduate at Lovely Professional University with an enduring fascination for computing systems, algorithmic problem-solving, and deep space exploration.",
      "Driven by relentless curiosity and disciplined engineering, I focus on building dependable software systems, exploring the frontiers of artificial intelligence, and transforming complex logical challenges into elegant, high-performance code.",
      "Whether optimizing algorithmic problem solving or architecting full-stack applications and hardware integrations, I bring deliberate focus, technical precision, and an ambitious vision to every line of code I craft."
    ],
    telemetry: [
      { label: "CURRENT BASE", value: "Lovely Professional University", detail: "B.Tech CSE (2025–Present)" },
      { label: "ACADEMIC STANDING", value: "7.0 CGPA", detail: "Computer Science & Engineering" },
      { label: "CORE INTERESTS", value: "Software Dev & AI", detail: "Systems, Algorithms, Automation" },
      { label: "ORIGIN POINT", value: "Kullu, Himachal Pradesh", detail: "Nucleus Sen Sec School" },
    ]
  },

  // Tech stack strictly matching specified skills
  skills: {
    centralNode: "SANIDHYA / TECH STACK",
    categories: [
      {
        name: "Languages",
        type: "orbital-1",
        skills: [
          { name: "C++", role: "Core Systems & Algorithmic Problem Solving", orbit: 1, angle: 30 },
          { name: "JavaScript", role: "Dynamic Web Engineering & Async Logic", orbit: 1, angle: 120 },
          { name: "Python", role: "AI, Automation & Rapid Scripting", orbit: 1, angle: 210 },
          { name: "C", role: "Low-level Memory & Fundamental Computing", orbit: 1, angle: 300 },
        ]
      },
      {
        name: "Frameworks & Technologies",
        type: "orbital-2",
        skills: [
          { name: "React", role: "Component Architecture & Reactive Interfaces", orbit: 2, angle: 15 },
          { name: "Node.js", role: "Scalable Event-driven Server Runtimes", orbit: 2, angle: 75 },
          { name: "Express.js", role: "Modular RESTful Services & Middleware", orbit: 2, angle: 135 },
          { name: "HTML", role: "Semantic Structure & Accessible Web Core", orbit: 2, angle: 195 },
          { name: "CSS", role: "Responsive Styling, Animations & Layouts", orbit: 2, angle: 255 },
          { name: "Bootstrap", role: "Rapid Responsive Grid Systems", orbit: 2, angle: 315 },
        ]
      },
      {
        name: "Databases & Tools",
        type: "orbital-3",
        skills: [
          { name: "MySQL", role: "Relational Data Modeling & Structured Queries", orbit: 3, angle: 45 },
          { name: "MongoDB", role: "Document-oriented NoSQL Data Storage", orbit: 3, angle: 165 },
          { name: "DBMS", role: "Database Architecture, Normalization & ACID Principles", orbit: 3, angle: 285 },
        ]
      }
    ],
    softSkills: [
      { name: "Problem Solving", desc: "Algorithmic thinking and structured decomposition of complex computational challenges" },
      { name: "Leadership", desc: "Guiding collaborative project initiatives with clarity, accountability, and direction" },
      { name: "Project Management", desc: "Milestone planning, rigorous prioritization, and timely execution of technical deliverables" },
      { name: "Adaptability", desc: "Rapid uptake of modern frameworks, emerging technologies, and evolving constraints" },
    ]
  },

  projects: [
    {
      id: "voice-recognition-ai",
      title: "Voice Recognition AI Assistant",
      tagline: "Intelligent Conversational Interface with NLP",
      date: "January 2026",
      classification: "DEEP SPACE INTELLIGENCE // AI SYSTEMS",
      description: "Built a Python-based voice assistant using speech recognition and natural language processing to understand spoken commands and deliver hands-free computing experiences.",
      capabilities: [
        "Real-time voice input processing and natural language command parsing",
        "Automated web search execution and query resolution",
        "System utility triggers and application launch automation",
        "High-fidelity text-to-speech audio synthesis responses",
        "Hands-free conversational interaction loop"
      ],
      technologies: ["Python", "Speech Recognition", "NLP", "APIs"],
      links: {
        viewProject: "#",
        github: "https://github.com/sanidhya-sharma/voice-recognition-ai"
      }
    },
    {
      id: "smart-parking-detector",
      title: "Smart Parking Detector using Arduino",
      tagline: "IoT Ultrasonic Slot Sensing & Telemetry Display",
      date: "2026",
      classification: "ORBITAL TELEMETRY // EMBEDDED HARDWARE",
      description: "Built an Arduino-based smart parking detection system using ultrasonic sensors to identify empty and occupied parking slots in real time with high reliability.",
      capabilities: [
        "Real-time parking slot occupancy detection via ultrasonic distance sensing",
        "Visual telemetry with dual-state LED status indicators (Available / Occupied)",
        "LCD display integration for instant driver slot readouts",
        "Cost-effective hardware architecture with calibrated ultrasonic echo timing",
        "Precision threshold calibration mitigating false positives in varying environments"
      ],
      technologies: ["Arduino", "Ultrasonic Sensors", "C++", "LCD Display"],
      links: {
        viewProject: "#",
        github: "https://github.com/sanidhya-sharma/arduino-smart-parking"
      }
    }
  ],

  education: [
    {
      level: "CURRENT MISSION // UNDERGRADUATE",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "Aug 2025 – Present",
      grade: "CGPA: 7.0",
      status: "Active Trajectory",
      highlights: [
        "Pursuing rigorous undergraduate coursework in computer science theory, computer systems, and software engineering",
        "Active member of campus technical forums, algorithmic problem solving groups, and project sprints",
        "Focus on system architectures, object-oriented paradigms, and web technologies"
      ]
    },
    {
      level: "SECONDARY MISSION // HIGHER SECONDARY",
      degree: "Intermediate (Class XII)",
      institution: "Nucleus Sen Sec School",
      location: "Kullu, Himachal Pradesh",
      period: "2024 – 2025",
      grade: "82%",
      status: "Completed",
      highlights: [
        "Strong foundation in Mathematics, Physics, and analytical logic",
        "Represented school in regional academic and technical exhibitions"
      ]
    },
    {
      level: "FOUNDATIONAL MISSION // SECONDARY",
      degree: "Matriculation (Class X)",
      institution: "Nucleus Sen Sec School",
      location: "Kullu, Himachal Pradesh",
      period: "2022 – 2023",
      grade: "80%",
      status: "Completed",
      highlights: [
        "Comprehensive foundational education with distinction in science and mathematics",
        "Active participation in school-wide science congress and quiz challenges"
      ]
    }
  ],

  certifications: [
    {
      title: "Digital Leadership in Business",
      issuer: "Simplilearn Skill Up",
      date: "November 2025",
      badgeId: "CERT-DLB-2025",
      domain: "Strategic Digital Transformation & Leadership",
      accent: "#38bdf8"
    },
    {
      title: "Programming Fundamentals using Python (Part 1 & 2)",
      issuer: "Infosys Springboard",
      date: "August 2026",
      badgeId: "CERT-PFP-2026",
      domain: "Algorithmic Logic, Data Structures & Python Core",
      accent: "#818cf8"
    }
  ],

  achievements: [
    {
      numeric: "50+",
      suffix: "DSA Problems",
      label: "Algorithmic Problem Solving",
      detail: "Solved 50+ Data Structures & Algorithms problems across competitive coding platforms, strengthening mathematical intuition and efficiency."
    },
    {
      numeric: "2nd",
      suffix: "Place",
      label: "Young Tech India Competition",
      detail: "Secured 2nd Place honors in the prestigious Young Tech India Competition for innovative technical execution and problem solving."
    },
    {
      numeric: "City",
      suffix: "Level Rep",
      label: "Nucleus Sen Sec School Representation",
      detail: "Selected to represent Nucleus Sen Sec School at city level in 2024, demonstrating academic aptitude and leadership."
    }
  ],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};
