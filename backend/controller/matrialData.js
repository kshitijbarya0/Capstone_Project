const getVideos = (req, res) => {
    const videoPlaylists = [
        {
            id: "1",
            title: "DSA with C++",
            youtubePlaylistId: "PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
            thumbnail: "https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
            duration: "40 hours"
        },
        {
            id: "2",
            title: "Computer Networks",
            youtubePlaylistId: "PLbRMhDVUMngd0On90Yky8Jm8JZzT7OULx",
            thumbnail: "https://img.youtube.com/vi/qiQR5rTSshw/maxresdefault.jpg",
            duration: "25 hours"
        },
        {
            id: "3",
            title: "OOPs in Java",
            youtubePlaylistId: "PLsyeobzWxl7oBxHp43xQTFrw8sZ4IVC2c",
            thumbnail: "https://img.youtube.com/vi/DiNlYjFCKdw/maxresdefault.jpg",
            duration: "30 hours"
        },
        {
            id: "4",
            title: "Operating Systems",
            youtubePlaylistId: "PLbRMhDVUMngfH5d3uQOQqyV-GtZXDvhX7",
            thumbnail: "https://img.youtube.com/vi/T6Kjv8Zx7lA/maxresdefault.jpg",
            duration: "35 hours"
        },
        {
            id: "5",
            title: "Database Management Systems",
            youtubePlaylistId: "PLbRMhDVUMngeCAhHEb8hZVW0bKYE0vFMC",
            thumbnail: "https://img.youtube.com/vi/Vj-Ci3y6F3w/maxresdefault.jpg",
            duration: "28 hours"
        },
        {
            id: "6",
            title: "Web Development Full Course",
            youtubePlaylistId: "PLjVLYmrlmjGfIA5qtDg5F7lRGNUvM3Xz4",
            thumbnail: "https://img.youtube.com/vi/3JluqTojuME/maxresdefault.jpg",
            duration: "60 hours"
        },
        {
            id: "7",
            title: "System Design",
            youtubePlaylistId: "PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a",
            thumbnail: "https://img.youtube.com/vi/xpDnVSmNFX0/maxresdefault.jpg",
            duration: "20 hours"
        },
        {
            id: "8",
            title: "Machine Learning Basics",
            youtubePlaylistId: "PLblh5JKOoLUIEXJJAxG8PJD4AUMQbvkE3",
            thumbnail: "https://img.youtube.com/vi/GwIo3gDZCVQ/maxresdefault.jpg",
            duration: "50 hours"
        },
        {
            id: "9",
            title: "JavaScript Mastery",
            youtubePlaylistId: "PLlasXeu85E9eV1GzDZJWBZp8s0RNTu1K7",
            thumbnail: "https://img.youtube.com/vi/Vc2bG2Py7KQ/maxresdefault.jpg",
            duration: "42 hours"
        },
        {
            id: "10",
            title: "Python for Beginners",
            youtubePlaylistId: "PL8ui5HKJLB2w7V-D9uiI9DrLkojoB2IfX",
            thumbnail: "https://img.youtube.com/vi/WGJJIrtnfpk/maxresdefault.jpg",
            duration: "45 hours"
        },
        {
            id: "11",
            title: "Cyber Security Fundamentals",
            youtubePlaylistId: "PLZoTAELRMXVN_UczZg6o0cxq-MhVGVc6G",
            thumbnail: "https://img.youtube.com/vi/WcUEQyZxj_U/maxresdefault.jpg",
            duration: "22 hours"
        }
    ];
    

    res.json(videoPlaylists);
};
const getNotes = (req, res) => {
    const notesData = [
        // 1st Year Notes
        { id: "101", title: "Introduction to Programming", subjectCode: "CS101", driveLink: "https://drive.google.com/cs101-intro", date: "2023-08-15", year: "1st Year" },
        { id: "102", title: "Data Structures", subjectCode: "CS102", driveLink: "https://drive.google.com/cs102-datastructures", date: "2023-09-20", year: "1st Year" },
        { id: "103", title: "Discrete Mathematics", subjectCode: "MA101", driveLink: "https://drive.google.com/ma101-discrete", date: "2023-10-05", year: "1st Year" },
        { id: "104", title: "Digital Logic Design", subjectCode: "EE101", driveLink: "https://drive.google.com/ee101-digital", date: "2023-11-12", year: "1st Year" },
        { id: "105", title: "Communication Skills", subjectCode: "HU101", driveLink: "https://drive.google.com/hu101-comm", date: "2023-12-01", year: "1st Year" },
        
        // 2nd Year Notes
        { id: "201", title: "Object-Oriented Programming", subjectCode: "CS201", driveLink: "https://drive.google.com/cs201-oop", date: "2024-01-15", year: "2nd Year" },
        { id: "202", title: "Algorithms Analysis", subjectCode: "CS202", driveLink: "https://drive.google.com/cs202-algorithms", date: "2024-02-10", year: "2nd Year" },
        { id: "203", title: "Database Systems", subjectCode: "CS203", driveLink: "https://drive.google.com/cs203-database", date: "2024-03-05", year: "2nd Year" },
        { id: "204", title: "Computer Architecture", subjectCode: "CS204", driveLink: "https://drive.google.com/cs204-architecture", date: "2024-04-20", year: "2nd Year" },
        { id: "205", title: "Probability & Statistics", subjectCode: "MA201", driveLink: "https://drive.google.com/ma201-stats", date: "2024-05-15", year: "2nd Year" },
        // 2nd Year Notes...
        { id: "202", title: "Algorithms Analysis", subjectCode: "CS202", driveLink: "https://drive.google.com/cs202-algorithms", date: "2024-02-10", year: "2nd Year" },
        { id: "203", title: "Database Systems", subjectCode: "CS203", driveLink: "https://drive.google.com/cs203-database", date: "2024-03-05", year: "2nd Year" },
        { id: "204", title: "Computer Architecture", subjectCode: "CS204", driveLink: "https://drive.google.com/cs204-architecture", date: "2024-04-20", year: "2nd Year" },
        { id: "205", title: "Probability & Statistics", subjectCode: "MA201", driveLink: "https://drive.google.com/ma201-stats", date: "2024-05-15", year: "2nd Year" },
        // 3rd Year Notes
        { id: "301", title: "Operating Systems", subjectCode: "CS301", driveLink: "https://drive.google.com/cs301-os", date: "2024-08-10", year: "3rd Year" },
        { id: "302", title: "Computer Networks", subjectCode: "CS302", driveLink: "https://drive.google.com/cs302-networks", date: "2024-09-05", year: "3rd Year" },
        { id: "303", title: "Software Engineering", subjectCode: "CS303", driveLink: "https://drive.google.com/cs303-software", date: "2024-10-12", year: "3rd Year" },
        { id: "304", title: "Web Development", subjectCode: "CS304", driveLink: "https://drive.google.com/cs304-webdev", date: "2024-11-20", year: "3rd Year" },
        { id: "305", title: "Artificial Intelligence", subjectCode: "CS305", driveLink: "https://drive.google.com/cs305-ai", date: "2024-12-15", year: "3rd Year" },
        
        // 4th Year Notes
        { id: "401", title: "Machine Learning", subjectCode: "CS401", driveLink: "https://drive.google.com/cs401-ml", date: "2025-01-10", year: "4th Year" },
        { id: "402", title: "Cloud Computing", subjectCode: "CS402", driveLink: "https://drive.google.com/cs402-cloud", date: "2025-02-05", year: "4th Year" },
        { id: "403", title: "Cybersecurity", subjectCode: "CS403", driveLink: "https://drive.google.com/cs403-security", date: "2025-03-15", year: "4th Year" },
        { id: "404", title: "Big Data Analytics", subjectCode: "CS404", driveLink: "https://drive.google.com/cs404-bigdata", date: "2025-04-10", year: "4th Year" },
        { id: "405", title: "Capstone Project", subjectCode: "CS405", driveLink: "https://drive.google.com/cs405-capstone", date: "2025-05-01", year: "4th Year" }
      ];

    res.json(notesData);
};
const getRoadmaps = (req, res) => {
    const roadmapData = [
        {
            "id": 1,
            "title": "Full Stack Development",
            "totalComponent":29,
            "totalSteps": 31,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Frontend Fundamentals",
                    "totalItems": 9,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "HTML & CSS Basics",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "JavaScript Fundamentals",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                                    "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL",
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Frontend Frameworks (React)",
                            "duration": "120 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
                                    "https://fullstackopen.com/en/part1"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Backend Development",
                    "totalItems": 9,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Node.js & Express Fundamentals",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv84pOe9waeWV",
                                    "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
                                    "https://www.youtube.com/playlist?list=PLbGui_ZYuhigFdLdbSI2EM2MrJB7I0j-B"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Databases (MongoDB & SQL)",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
                                    "https://www.udemy.com/course/the-complete-sql-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
                                    "https://www.youtube.com/playlist?list=PLjVLYmrlmjGcQfNj_SLlLV2IA-DvXZepN"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "API Development & Authentication",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q",
                                    "https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PL8p2I9GklV47TDYUq8RmFzeI9CgOoVgpJ",
                                    "https://www.youtube.com/playlist?list=PLbGui_ZYuhijTKyrlu-0g5GcP9bQgboWO"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "DevOps & Deployment",
                    "totalItems": 7,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Git & GitHub Workflow",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR",
                                    "https://www.udemy.com/course/git-and-github-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi",
                                    "https://www.youtube.com/playlist?list=PLiOa6ike4WAHljIOitb3vR0nXQgneUedR"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Docker & Containerization",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7",
                                    "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLhfxuQVMs-nx3YQa3XJ9-4g_EoK0J8WhU",
                                    "https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "AWS/Cloud Deployment",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLt1SIbA8guusAJIBS8JgbSFKfQdVkWDbl",
                                    "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLCFe3TcoBniIYIqZHIGwEcV-z9s7dMUPZ",
                                    "https://www.youtube.com/playlist?list=PLBGx66SQNZ8a_y_CMLHchyHz_R6-z9Mbh"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 4,
                    "number": 4,
                    "title": "Advanced Topics",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "TypeScript Integration",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
                                    "https://www.udemy.com/course/understanding-typescript/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_",
                                    "https://www.youtube.com/playlist?list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "GraphQL Implementation",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f",
                                    "https://www.howtographql.com/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLe30vg_FG4OSGHy5KK0x5B-ux4wsIV5Fb",
                                    "https://www.youtube.com/playlist?list=PLx0T51ydRO7puVYkzs5KAeGU9-HAANaR-"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Testing & CI/CD Pipelines",
                            "duration": "65 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ",
                                    "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLxoCk2yfQvDhI4YDJbHlLKvLR-7aL4qX7",
                                    "https://www.youtube.com/playlist?list=PLQoKOqx6dTO54zNIL_XWGJbyAyNHDFIS0"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "title": "Android Development",
            "totalSteps": 24,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Programming Fundamentals",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Java Programming",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLZPZq0r_RZOMhCAyywfnYLlrjiVOkdAI1",
                                    "https://www.udemy.com/course/java-the-complete-java-developer-course/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits-Bm8gPL8G-Y4ft",
                                    "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqGkzPnK_KBksi"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Kotlin Programming",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLQkwcJG4YTCRSQikwhtoApYs9ij_Hc5Z9",
                                    "https://www.udemy.com/course/kotlin-android-developer-masterclass/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIMW3-rSOGCkPlO1z_IYJy3G",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Android Basics",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Android Studio & Project Setup",
                            "duration": "60 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE8TUoCyjomGFqzTFcJ05OaC",
                                    "https://developer.android.com/courses/android-basics-kotlin/course"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIO0jLgj8g6sADnD0IBaWaw2"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Layouts & UI Components",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLrnPJCHvNZuA80lNWNCLICR3qYzhw3iPI",
                                    "https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIPVKqCwHkOoomJcWGVhQqHw",
                                    "https://www.youtube.com/playlist?list=PLM8RNjTnXnKgXffvMCQD9¦¾RkAzAetBDt"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Activity & Fragment Lifecycle",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLrnPJCHvNZuAe5r049EpzxQGF2Y7nGWYQ",
                                    "https://www.udemy.com/course/the-complete-android-10-developer-course-mastering-android/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLgH5QX0i9K3p9xzYLFGdfYliIRBLVDRV5",
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN3GBUmpGqjiKGMcBaRT2A-m"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "Android Architecture",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "MVVM Architecture",
                            "duration": "85 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-8wD5JJZrKraus_tRw8yZa",
                                    "https://www.udemy.com/course/android-architecture-componentsmvvm-with-dagger-retrofit/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOSigPZ_IEZXrCjs1L5Han_",
                                    "https://www.youtube.com/playlist?list=PLlxmoA0rQ-Lw5k_QCqVl3rsoJOnb_00UV"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Jetpack Components",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_MUlyvbCiOWsfq0xzgK_1g",
                                    "https://developer.android.com/courses/jetpack-compose/course"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOHMXHsGchvs7OGGQsCnMNY",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_Ok-0Lx2v9hfrmbxi3GgsX1"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Room Database & LiveData",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-4Rot9KmB-KbI_AOXwMKE1",
                                    "https://www.udemy.com/course/android-jetpack-masterclass/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN3CMNtttJbJIE4tJYZ_dWjF",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIP-8sc0Nb_X1PYYIVxJUj0y"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 4,
                    "number": 4,
                    "title": "Advanced Android",
                    "totalItems": 6,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Retrofit & Networking",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE-vInwQhGSdnbyJ62nixHCt",
                                    "https://www.udemy.com/course/android-networking-masterclass-with-retrofit-okhttp-gson/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLdHg5T0SNpN0ygjV4yGXNct25jY_ue70U",
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIMW3-rSOGCkPlO1z_IYJy3G"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Coroutines & Flow",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_PFBRHFB_aL5stMQg3smhL",
                                    "https://www.udemy.com/course/kotlin-coroutines-in-android/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIPylLXKRtJBe0UjIl72RJO_",
                                    "https://www.youtube.com/playlist?list=PLUhfM8afLE_PBmK-AUKjZgq9LZJ3k6CNK"
                                ]
                            }
                        },
                        {
                            "id": 3,
                            "title": "Jetpack Compose",
                            "duration": "95 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLgCYzUzKIBE_I0_tU5TvkfQpnmrP_9XV8",
                                    "https://developer.android.com/codelabs/jetpack-compose-basics"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLRKyZvuMYSIOFiwICmG_mP8_fFPK86Q_R",
                                    "https://www.youtube.com/playlist?list=PLlFz6RSza_X_BsEGBrmGWkHLZIU_m4rFV"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "title": "Data Science",
            "totalSteps": 20,
            "completedSteps": 0,
            "steps": [
                {
                    "id": 1,
                    "number": 1,
                    "title": "Programming Fundamentals",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Python Programming",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
                                    "https://www.udemy.com/course/complete-python-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",
                                    "https://www.youtube.com/playlist?list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Data Structures & Algorithms",
                            "duration": "90 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12",
                                    "https://www.udemy.com/course/data-structures-and-algorithms-python/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLzjZaW71kMwQ-D3oxCEDHAvYu8VC1XOsS",
                                    "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "number": 2,
                    "title": "Mathematics & Statistics",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "Linear Algebra & Calculus",
                            "duration": "75 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
                                    "https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLIRnO_sdVuEfTuYoKUZZRQiyhLyL4Jysa",
                                    "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Probability & Statistics",
                            "duration": "80 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PLvxOuBpazmsOGOursPoofaHyz_1NpxbhA",
                                    "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLU6SqdYcYsfI1la_TBfVUfXVRyWlq3RKb",
                                    "https://www.youtube.com/playlist?list=PLIoGJq6H_mDsRMQADNcwZMMUP7DQlKYeS"
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "number": 3,
                    "title": "Data Analysis & Visualization",
                    "totalItems": 5,
                    "completedItems": 0,
                    "lectures": [
                        {
                            "id": 1,
                            "title": "NumPy & Pandas",
                            "duration": "85 minutes",
                            "completed": 0,
                            "total": 2,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS",
                                    "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLPbgcxheSpE1DJKfdko58_AIZRIT0TjpO",
                                    "https://www.youtube.com/playlist?list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8"
                                ]
                            }
                        },
                        {
                            "id": 2,
                            "title": "Data Visualization (Matplotlib, Seaborn)",
                            "duration": "70 minutes",
                            "completed": 0,
                            "total": 3,
                            "resources": {
                                "english": [
                                    "https://www.youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_",
                                    "https://www.coursera.org/learn/python-data-visualization"
                                ],
                                "hindi": [
                                    "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdEE2jFpL71LsVH9FS-CBYw",
                                    "https://www.youtube.com/playlist?list=PLPbgcxheSpE0a0QVMQvq3AVKhJzLKFnH_"
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ];


    res.json(roadmapData);
};
const getMcq = (req,res) =>{
    const mcqData = {
        "DSA": [
          {
            "id": "dsa-1",
            "questionText": "What is the time complexity of binary search?",
            "options": ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
            "correctAnswer": "O(log n)",
            "explanation": "Binary search divides the search space in half with each iteration."
          },
          {
            "id": "dsa-2",
            "questionText": "Which data structure follows LIFO principle?",
            "options": ["Queue", "Stack", "Linked List", "Tree"],
            "correctAnswer": "Stack",
            "explanation": "Stack follows Last In First Out principle."
          },
          {
            "id": "dsa-3",
            "questionText": "What is the worst-case time complexity of quicksort?",
            "options": ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
            "correctAnswer": "O(n²)",
            "explanation": "Quicksort's worst case occurs when the pivot is always the smallest or largest element."
          }
        ],
        "OS": [
          {
            "id": "os-1",
            "questionText": "Which scheduling algorithm has the shortest average waiting time?",
            "options": ["FCFS", "SJF", "Round Robin", "Priority"],
            "correctAnswer": "SJF",
            "explanation": "Shortest Job First minimizes average waiting time."
          },
          {
            "id": "os-2",
            "questionText": "What is thrashing in operating systems?",
            "options": [
              "When a process spends more time paging than executing",
              "When a process is terminated unexpectedly",
              "When CPU utilization is 100%",
              "When multiple processes compete for CPU time"
            ],
            "correctAnswer": "When a process spends more time paging than executing",
            "explanation": "Thrashing occurs when the system spends more time swapping pages than executing."
          },
          {
            "id": "os-3",
            "questionText": "Which of the following is not a deadlock prevention method?",
            "options": ["Resource allocation graph", "Mutual exclusion", "Hold and wait", "Circular wait"],
            "correctAnswer": "Resource allocation graph",
            "explanation": "Resource allocation graph is used for deadlock detection, not prevention."
          }
        ],
        "CN": [
          {
            "id": "cn-1",
            "questionText": "Which layer of the OSI model is responsible for routing?",
            "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
            "correctAnswer": "Network Layer",
            "explanation": "The Network Layer (Layer 3) handles routing between networks."
          },
          {
            "id": "cn-2",
            "questionText": "What is the maximum size of an IPv4 address?",
            "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
            "correctAnswer": "32 bits",
            "explanation": "IPv4 addresses are 32 bits (4 bytes) long."
          },
          {
            "id": "cn-3",
            "questionText": "Which protocol operates at the transport layer?",
            "options": ["HTTP", "IP", "TCP", "Ethernet"],
            "correctAnswer": "TCP",
            "explanation": "TCP (Transmission Control Protocol) operates at Layer 4 (Transport Layer)."
          }
        ],
        "OOPs": [
          {
            "id": "oops-1",
            "questionText": "Which OOP concept describes hiding internal implementation details?",
            "options": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
            "correctAnswer": "Encapsulation",
            "explanation": "Encapsulation involves hiding the internal state and functionality of an object."
          },
          {
            "id": "oops-2",
            "questionText": "What is method overloading?",
            "options": [
              "Same method name with different parameters",
              "Same method with different return types",
              "Different method names with same parameters",
              "Same method name in parent and child classes"
            ],
            "correctAnswer": "Same method name with different parameters",
            "explanation": "Method overloading allows multiple methods with the same name but different parameters."
          },
          {
            "id": "oops-3",
            "questionText": "Which principle states 'objects of a superclass shall be replaceable with objects of its subclasses without breaking the application'?",
            "options": ["DRY Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle"],
            "correctAnswer": "Liskov Substitution Principle",
            "explanation": "The Liskov Substitution Principle is a key concept in object-oriented design."
          }
        ],
        "DBMS": [
          {
            "id": "dbms-1",
            "questionText": "Which normal form eliminates transitive dependencies?",
            "options": ["1NF", "2NF", "3NF", "BCNF"],
            "correctAnswer": "3NF",
            "explanation": "Third Normal Form (3NF) eliminates transitive dependencies."
          },
          {
            "id": "dbms-2",
            "questionText": "What is a foreign key?",
            "options": [
              "Primary key of another table",
              "Candidate key in the same table",
              "Attribute that can uniquely identify a row",
              "Key that cannot be null"
            ],
            "correctAnswer": "Primary key of another table",
            "explanation": "A foreign key is an attribute that references the primary key of another table."
          },
          {
            "id": "dbms-3",
            "questionText": "Which SQL statement is used to retrieve data from a database?",
            "options": ["INSERT", "UPDATE", "SELECT", "DELETE"],
            "correctAnswer": "SELECT",
            "explanation": "The SELECT statement is used to query and retrieve data from a database."
          }
        ]
      };
    res.json(mcqData);
}
module.exports = { getVideos, getNotes, getRoadmaps,getMcq };
