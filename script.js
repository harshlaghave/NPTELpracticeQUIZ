const questions = [
    { 
        question: "Which of the following best defines a group?", 
        answers: [
            { text: "A random collection of people", correct: false },
            { text: "A workplace meeting", correct: false },
            { text: "A group consists of individuals working together toward a shared goal.", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "What are the verbal and nonverbal responses a person consciously or unconsciously sends in reaction to another person's communication called?", 
        answers: [
            { text: "Noise", correct: false },
            { text: "Feedback", correct: true },
            { text: "Interruption", correct: false },
            { text: "Interference", correct: false }
        ]
    },
    { 
        question: "Which of the following is a key characteristic of a team?", 
        answers: [
            { text: "Individuals working separately", correct: false },
            { text: "Members share a common purpose and work toward a specific goal.", correct: true },
            { text: "A team has no specific goal", correct: false },
            { text: "None of the above", correct: false }
        ]
    },

    
        { 
            question: "Which of the following best defines a group?", 
            answers: [
                { text: "A random collection of people", correct: false },
                { text: "A workplace meeting", correct: false },
                { text: "A group consists of individuals working together toward a shared goal.", correct: true },
                { text: "None of the above", correct: false }
            ]
        },
        { 
            question: "What are the verbal and nonverbal responses a person consciously or unconsciously sends in reaction to another person's communication called?", 
            answers: [
                { text: "Noise", correct: false },
                { text: "Feedback", correct: true },
                { text: "Interruption", correct: false },
                { text: "Interference", correct: false }
            ]
        },
        { 
            question: "Which of the following is a key characteristic of a team?", 
            answers: [
                { text: "Individuals working separately", correct: false },
                { text: "Members share a common purpose and work toward a specific goal.", correct: true },
                { text: "A team has no specific goal", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        { 
            question: "When individuals communicate within the same cultural or social group, they are engaging in:", 
            answers: [
                { text: "Interpersonal communication", correct: false },
                { text: "Cross-cultural communication", correct: false },
                { text: "Intra-cultural communication", correct: true },
                { text: "Mass communication", correct: false }
            ]
        },
        { 
            question: "Questions of fact primarily deal with:", 
            answers: [
                { text: "Opinions", correct: false },
                { text: "Interpretations", correct: false },
                { text: "Whether a statement is true or false", correct: true },
                { text: "Personal perspectives", correct: false }
            ]
        },
        { 
            question: "During the core of an interview, which of the following is most likely to occur?", 
            answers: [
                { text: "Talking about hobbies", correct: false },
                { text: "Discussing the candidate's previous job roles and accomplishments", correct: true },
                { text: "Introducing the company culture", correct: false },
                { text: "Asking personal questions", correct: false }
            ]
        },
        { 
            question: "What is the main purpose of communication?", 
            answers: [
                { text: "To talk as much as possible", correct: false },
                { text: "To exchange information", correct: true },
                { text: "To express emotions only", correct: false },
                { text: "To impress others", correct: false }
            ]
        },
        
            { 
                question: "Which of the following is a barrier to effective communication?", 
                answers: [
                    { text: "Active listening", correct: false },
                    { text: "Clear articulation", correct: false },
                    { text: "Physical noise", correct: true },
                    { text: "Open-mindedness", correct: false }
                ]
            },
            { 
                question: "What is the primary function of 'active listening' in effective communication?", 
                answers: [
                    { text: "To respond quickly", correct: false },
                    { text: "To prepare an argument", correct: false },
                    { text: "To understand, interpret, and respond thoughtfully to the message", correct: true },
                    { text: "To interrupt when necessary", correct: false }
                ]
            },
            { 
                question: "What is the term for communication that takes place in a professional or organizational context, such as in meetings or team collaborations?", 
                answers: [
                    { text: "Mass communication", correct: false },
                    { text: "Organizational communication", correct: true },
                    { text: "Interpersonal communication", correct: false },
                    { text: "Intrapersonal communication", correct: false }
                ]
            },
            { 
                question: "What is the main purpose of 'noise' in the communication process?", 
                answers: [
                    { text: "To enhance clarity", correct: false },
                    { text: "To distort or interfere with the message", correct: true },
                    { text: "To make the conversation interesting", correct: false },
                    { text: "To increase feedback", correct: false }
                ]
            },
            { 
                question: "Which of the following is an example of 'informal communication' within an organization?", 
                answers: [
                    { text: "A company-wide email", correct: false },
                    { text: "A team presentation", correct: false },
                    { text: "A casual conversation between coworkers in the breakroom", correct: true },
                    { text: "A written policy document", correct: false }
                ]
            },
            { 
                question: "What is the origin of the word 'verbal' in verbal communication?", 
                answers: [
                    { text: "Greek", correct: false },
                    { text: "French", correct: false },
                    { text: "Latin", correct: true },
                    { text: "German", correct: false }
                ]
            },
            { 
                question: "According to the Sapir-Whorf hypothesis, what shapes the way we think and perceive the world?", 
                answers: [
                    { text: "Our emotions", correct: false },
                    { text: "Labels and language", correct: true },
                    { text: "Gestures", correct: false },
                    { text: "Climate", correct: false }
                ]
            },
            { 
                question: "Which part of communication focuses on non-verbal cues and the importance of active listening?", 
                answers: [
                    { text: "Written communication", correct: false },
                    { text: "Body language and listening skills", correct: true },
                    { text: "Technical jargon", correct: false },
                    { text: "Formal presentations", correct: false }
                ]
            },
            { 
                question: "What are the three communication styles Deborah Tannen associates with gender differences in speech?", 
                answers: [
                    { text: "Assertiveness, politeness, hesitation", correct: false },
                    { text: "Qualifiers, tag questions, disclaimers", correct: true },
                    { text: "Direct, indirect, emotional", correct: false },
                    { text: "Fast, slow, neutral", correct: false }
                ]
            },
            { 
                question: "What are the '3 P's' of noise in communication?", 
                answers: [
                    { text: "Physical, Physiological, Psychological", correct: true },
                    { text: "Personal, Public, Professional", correct: false },
                    { text: "Primary, Passive, Productive", correct: false },
                    { text: "Pitch, Pace, Pause", correct: false }
                ]
            },
            { 
                question: "If a manager’s use of 'repositioning' is misunderstood as rearranging physical seats, this reflects what communication problem?", 
                answers: [
                    { text: "Information overload", correct: false },
                    { text: "Bypassing", correct: true },
                    { text: "Semantic barriers", correct: false },
                    { text: "Perceptual differences", correct: false }
                ]
            },
            
                { 
                    question: "Which type of noise is at play when a listener fails to understand a speaker due to preoccupation with personal issues?", 
                    answers: [
                        { text: "Physical", correct: false },
                        { text: "Semantic", correct: false },
                        { text: "Psychological", correct: true },
                        { text: "Environmental", correct: false }
                    ]
                },
                { 
                    question: "When someone uses 'dehired' instead of 'fired,' this is an example of what kind of language?", 
                    answers: [
                        { text: "Euphemism", correct: true },
                        { text: "Jargon", correct: false },
                        { text: "Slang", correct: false },
                        { text: "Colloquialism", correct: false }
                    ]
                },
                { 
                    question: "What type of communication is taking place when a student reflects on their own speech patterns?", 
                    answers: [
                        { text: "Interpersonal", correct: false },
                        { text: "Mass", correct: false },
                        { text: "Intrapersonal", correct: true },
                        { text: "Group", correct: false }
                    ]
                },
                { 
                    question: "A group of workers in a factory resolving issues together is an example of what type of communication?", 
                    answers: [
                        { text: "Mass communication", correct: false },
                        { text: "Group communication", correct: true },
                        { text: "Interpersonal communication", correct: false },
                        { text: "Intrapersonal communication", correct: false }
                    ]
                },
                { 
                    question: "Which of the following reflects the role of culture in communication as per the Sapir-Whorf hypothesis?", 
                    answers: [
                        { text: "Cultural beliefs are universal", correct: false },
                        { text: "Technology has no effect on language", correct: false },
                        { text: "Different languages influence perception of the world differently", correct: true },
                        { text: "Verbal communication is superior to non-verbal communication", correct: false }
                    ]
                },
                { 
                    question: "How can technology negatively impact verbal communication?", 
                    answers: [
                        { text: "By improving connectivity", correct: false },
                        { text: "By encouraging the use of informal language in formal contexts", correct: true },
                        { text: "By making face-to-face communication more necessary", correct: false },
                        { text: "By eliminating misunderstandings", correct: false }
                    ]
                },
                { 
                    question: "Which scenario highlights the concept of 'denotative meaning'?", 
                    answers: [
                        { text: "Calling a person 'cold' to mean they are unfriendly", correct: false },
                        { text: "Saying 'heart' to symbolize love", correct: false },
                        { text: "Describing a rose as a flower with petals and thorns", correct: true },
                        { text: "Using 'dog' to mean loyalty", correct: false }
                    ]
                },
                { 
                    question: "What principle of communication is violated when feedback is ignored in a workplace meeting?", 
                    answers: [
                        { text: "Communication is one-way", correct: false },
                        { text: "Communication is dynamic", correct: true },
                        { text: "Listening is unnecessary", correct: false },
                        { text: "Barriers to communication do not exist", correct: false }
                    ]
                },
                { 
                    question: "In a multilingual workplace, what is an effective strategy to overcome miscommunication?", 
                    answers: [
                        { text: "Using only complex words", correct: false },
                        { text: "Avoiding communication", correct: false },
                        { text: "Limiting the use of technical jargon", correct: true },
                        { text: "Speaking louder", correct: false }
                    ]
                },
                { 
                    question: "What percentage of communication is non-verbal, according to Mehrabian's research?", 
                    answers: [
                        { text: "35%", correct: false },
                        { text: "55%", correct: false },
                        { text: "93%", correct: true },
                        { text: "65%", correct: false }
                    ]
                },
                { 
                    question: "What is the study of personal space in communication called?", 
                    answers: [
                        { text: "Chronemics", correct: false },
                        { text: "Proxemics", correct: true },
                        { text: "Haptics", correct: false },
                        { text: "Kinesics", correct: false }
                    ]
                },
                { 
                    question: "Which of the following is an example of message substitution in non-verbal communication?", 
                    answers: [
                        { text: "Nodding to indicate agreement", correct: true },
                        { text: "Speaking loudly to show authority", correct: false },
                        { text: "Writing an email instead of speaking", correct: false },
                        { text: "Repeating a message for clarity", correct: false }
                    ]
                },
                { 
                    question: "What does haptics refer to in non-verbal communication?", 
                    answers: [
                        { text: "Tone of voice", correct: false },
                        { text: "Touch", correct: true },
                        { text: "Personal space", correct: false },
                        { text: "Facial expressions", correct: false }
                    ]
                },
                { 
                    question: "Which aspect of intercultural communication refers to considering one's culture superior to others?", 
                    answers: [
                        { text: "Multiculturalism", correct: false },
                        { text: "Cultural relativism", correct: false },
                        { text: "Globalization", correct: false },
                        { text: "Ethnocentrism", correct: true }
                    ]
                },
                { 
                    question: "A baby instinctively smiles at a stranger. This demonstrates which feature of non-verbal communication?", 
                    answers: [
                        { text: "Learned behavior", correct: false },
                        { text: "Conscious effort", correct: false },
                        { text: "Instinctual nature", correct: true },
                        { text: "Verbal reinforcement", correct: false }
                    ]
                },
                { 
                    question: "If someone avoids eye contact in a conversation, it can imply they are likely feeling:", 
                    answers: [
                        { text: "Excited", correct: false },
                        { text: "Distrustful or nervous", correct: true },
                        { text: "Confident", correct: false },
                        { text: "Indifferent", correct: false }
                    ]
                },
                { 
                    question: "When a teacher emphasizes a point by slowing their speech, this is an example of:", 
                    answers: [
                        { text: "Message substitution", correct: false },
                        { text: "Message accentuation", correct: true },
                        { text: "Message contradiction", correct: false },
                        { text: "Message reinforcement", correct: false }
                    ]
                },
                { 
                    question: "In a multicultural workplace, a Western colleague giving a firm handshake signifies:", 
                    answers: [
                        { text: "Aggressiveness", correct: false },
                        { text: "Confidence and professionalism", correct: true },
                        { text: "Disinterest", correct: false },
                        { text: "Nervousness", correct: false }
                    ]
                },
                { 
                    question: "A person working in Japan arrives 15 minutes early for a meeting. This demonstrates respect for which cultural communication value?", 
                    answers: [
                        { text: "Haptics", correct: false },
                        { text: "Chronemics", correct: true },
                        { text: "Proxemics", correct: false },
                        { text: "Kinesics", correct: false }
                    ]
                },
                { 
                    question: "Which type of non-verbal communication is most closely related to cultural norms?", 
                    answers: [
                        { text: "Haptics", correct: false },
                        { text: "Proxemics", correct: true },
                        { text: "Kinesics", correct: false },
                        { text: "Chronemics", correct: false }
                    ]
                },

                
                    { 
                        question: "What is the primary purpose of using non-verbal cues during intercultural communication?", 
                        answers: [
                            { text: "To improve speaking skills", correct: false },
                            { text: "To reduce misunderstandings", correct: true },
                            { text: "To replace verbal communication", correct: false },
                            { text: "To create confusion", correct: false }
                        ]
                    },
                    { 
                        question: "What is ignored when someone keeps interrupting while another person is speaking?", 
                        answers: [
                            { text: "Message regulation", correct: true },
                            { text: "Verbal fluency", correct: false },
                            { text: "Public speaking", correct: false },
                            { text: "Listening barriers", correct: false }
                        ]
                    },
                    { 
                        question: "How does color in non-verbal communication affect emotions?", 
                        answers: [
                            { text: "It has no effect on mood", correct: false },
                            { text: "It can influence mood and psychological states", correct: true },
                            { text: "It only affects cultural identity", correct: false },
                            { text: "It is not considered a form of communication", correct: false }
                        ]
                    },
                    { 
                        question: "What is the role of kinesics in enhancing intercultural understanding?", 
                        answers: [
                            { text: "It aids in interpreting facial expressions and gestures", correct: true },
                            { text: "It prevents communication across cultures", correct: false },
                            { text: "It only applies to written communication", correct: false },
                            { text: "It reduces the importance of verbal speech", correct: false }
                        ]
                    },
                    { 
                        question: "What does the term 'kinesics' refer to?", 
                        answers: [
                            { text: "The study of written language", correct: false },
                            { text: "The study of spoken words", correct: false },
                            { text: "The study of human body motion", correct: true },
                            { text: "The study of electronic communication", correct: false }
                        ]
                    },
                    { 
                        question: "Which type of gaze is used in business communication?", 
                        answers: [
                            { text: "Direct-to-mouth gaze", correct: false },
                            { text: "Casual gaze", correct: false },
                            { text: "Downward gaze", correct: false },
                            { text: "Eyes-to-forehead gaze", correct: true }
                        ]
                    },
                    { 
                        question: "What is the primary component of active listening?", 
                        answers: [
                            { text: "Ignoring distractions", correct: false },
                            { text: "Responding with open-ended questions", correct: true },
                            { text: "Speaking more than listening", correct: false },
                            { text: "Using minimal body language", correct: false }
                        ]
                    },
                    { 
                        question: "What is the first stage of the HURIER model in listening?", 
                        answers: [
                            { text: "Understanding", correct: false },
                            { text: "Remembering", correct: false },
                            { text: "Hearing", correct: true },
                            { text: "Evaluating", correct: false }
                        ]
                    },
                    { 
                        question: "What does a tight grasp during a handshake signify?", 
                        answers: [
                            { text: "Friendliness", correct: false },
                            { text: "Superiority complex", correct: true },
                            { text: "Nervousness", correct: false },
                            { text: "Lack of confidence", correct: false }
                        ]
                    },
                    { 
                        question: "In the role play about a man-eater, what does the Indian sailor need to communicate?", 
                        answers: [
                            { text: "That he is a skilled hunter", correct: false },
                            { text: "That he is vegetarian and harmless", correct: true },
                            { text: "That he wants to leave the country", correct: false },
                            { text: "That he is a fisherman", correct: false }
                        ]
                    },
                    { 
                        question: "What does crossing one’s legs in a 'figure-four' position suggest in body language?", 
                        answers: [
                            { text: "Aggressiveness", correct: false },
                            { text: "Confidence and evaluation", correct: true },
                            { text: "Discomfort", correct: false },
                            { text: "Shyness", correct: false }
                        ]
                    },
                    { 
                        question: "During an intercultural communication activity, what cultural conflict might arise between a Tamil father and son?", 
                        answers: [
                            { text: "Disagreements about work ethics", correct: false },
                            { text: "Differences in food preferences", correct: false },
                            { text: "Accepting an intercultural marriage", correct: true },
                            { text: "Misunderstanding political views", correct: false }
                        ]
                    },
                    { 
                        question: "Which active listening indicator uses the phrase 'uh-huh' or 'I see'?", 
                        answers: [
                            { text: "Silence", correct: false },
                            { text: "Attending response (verbal)", correct: true },
                            { text: "Interrupting", correct: false },
                            { text: "Ignoring the speaker", correct: false }
                        ]
                    },
                    { 
                        question: "What is the key behavior expected of a 'responsive' body language posture?", 
                        answers: [
                            { text: "Crossed arms", correct: false },
                            { text: "Arms open, leaning slightly forward", correct: true },
                            { text: "Looking away", correct: false },
                            { text: "Slouching", correct: false }
                        ]
                    },
                    { 
                        question: "Why is body language considered an essential part of communication?", 
                        answers: [
                            { text: "It is more important than spoken words in conveying emotions.", correct: true },
                            { text: "It is only useful in formal situations", correct: false },
                            { text: "It has no significant effect on communication", correct: false },
                            { text: "It only matters in interviews", correct: false }
                        ]
                    },
                    { 
                        question: "What can cause ineffective listening during a conversation?", 
                        answers: [
                            { text: "Focused attention", correct: false },
                            { text: "Interruptions and ego involvement", correct: true },
                            { text: "Summarizing key points", correct: false },
                            { text: "Asking clarifying questions", correct: false }
                        ]
                    },
                    { 
                        question: "How can someone show they are actively listening in a virtual meeting?", 
                        answers: [
                            { text: "By turning off the camera", correct: false },
                            { text: "By using appropriate facial expressions and nodding", correct: true },
                            { text: "By speaking without pausing", correct: false },
                            { text: "By muting themselves throughout", correct: false }
                        ]
                    },
                    { 
                        question: "What distinguishes critical listening from other types of listening?", 
                        answers: [
                            { text: "It focuses on emotional connection", correct: false },
                            { text: "It focuses on evaluating and determining accuracy.", correct: true },
                            { text: "It involves memorizing facts", correct: false },
                            { text: "It is used only in academic settings", correct: false }
                        ]
                    },
                    { 
                        question: "What non-verbal gesture could improve intercultural communication?", 
                        answers: [
                            { text: "Avoiding eye contact", correct: false },
                            { text: "Using culturally neutral gestures like open palms", correct: true },
                            { text: "Speaking in a loud voice", correct: false },
                            { text: "Crossing arms", correct: false }
                        ]
                    },
                    { 
                        question: "What is the primary purpose of a cover letter?", 
                        answers: [
                            { text: "To summarize personal hobbies", correct: false },
                            { text: "To explain why the applicant is a good fit for the job", correct: true },
                            { text: "To list references", correct: false },
                            { text: "To replace the resume", correct: false }
                        ]
                    },
                    { 
                        question: "Which skill is described as 'the mother of all speaking'?", 
                        answers: [
                            { text: "Public speaking", correct: false },
                            { text: "Listening", correct: true },
                            { text: "Persuasion", correct: false },
                            { text: "Debating", correct: false }
                        ]
                    },
                    
                        { 
                            question: "In resume writing, what format is recommended for listing skills in a one-page CV?", 
                            answers: [
                                { text: "Paragraph format", correct: false },
                                { text: "Bulleted list", correct: true },
                                { text: "Numbered list", correct: false },
                                { text: "Table format", correct: false }
                            ]
                        },
                        { 
                            question: "What percentage of a message's value is transmitted through body language?", 
                            answers: [
                                { text: "35%", correct: false },
                                { text: "65%", correct: true },
                                { text: "50%", correct: false },
                                { text: "80%", correct: false }
                            ]
                        },
                        { 
                            question: "Which type of resume is tailored for digital processing by OCR software?", 
                            answers: [
                                { text: "Chronological resume", correct: false },
                                { text: "Scannable resume", correct: true },
                                { text: "Creative resume", correct: false },
                                { text: "Functional resume", correct: false }
                            ]
                        },
                        { 
                            question: "Which of the following best demonstrates effective listening in a group discussion?", 
                            answers: [
                                { text: "Taking notes silently", correct: false },
                                { text: "Nodding frequently", correct: false },
                                { text: "Interrupting to clarify points", correct: false },
                                { text: "Maintaining eye contact and paraphrasing the speaker's points", correct: true }
                            ]
                        },
                        { 
                            question: "If a recruiter specifies that they use OCR to process resumes, which format should an applicant use?", 
                            answers: [
                                { text: "PDF with graphics", correct: false },
                                { text: "A scannable resume with simple formatting and keywords", correct: true },
                                { text: "Handwritten resume", correct: false },
                                { text: "Video resume", correct: false }
                            ]
                        },
                        { 
                            question: "What posture conveys confidence during a job interview?", 
                            answers: [
                                { text: "Slouching in the chair", correct: false },
                                { text: "Sitting upright with a slight forward lean and relaxed hands", correct: true },
                                { text: "Crossing arms tightly", correct: false },
                                { text: "Looking away while speaking", correct: false }
                            ]
                        },
                        { 
                            question: "A candidate applying for a managerial role highlights their leadership ability in the resume. Which of the following best supports this claim?", 
                            answers: [
                                { text: "Completed an online leadership course", correct: false },
                                { text: "Managed a team of 15 to complete a project ahead of schedule", correct: true },
                                { text: "Wrote a blog about leadership", correct: false },
                                { text: "Attended a leadership seminar", correct: false }
                            ]
                        },
                        { 
                            question: "Which of the following actions would demonstrate poor listening skills during a meeting?", 
                            answers: [
                                { text: "Asking relevant questions", correct: false },
                                { text: "Maintaining eye contact", correct: false },
                                { text: "Taking notes", correct: false },
                                { text: "Avoiding eye contact and checking your phone", correct: true }
                            ]
                        },
                        { 
                            question: "What is the best way to emphasize transferable skills in a resume?", 
                            answers: [
                                { text: "Use complicated technical jargon", correct: false },
                                { text: "List them in a dedicated skills section with relevant examples", correct: true },
                                { text: "Mention them briefly in the summary", correct: false },
                                { text: "Hide them within job descriptions", correct: false }
                            ]
                        },
                        { 
                            question: "What is the main advantage of using a functional resume over a chronological one?", 
                            answers: [
                                { text: "It lists experiences in order of occurrence", correct: false },
                                { text: "It emphasizes the candidate’s skills over their employment history", correct: true },
                                { text: "It is suitable only for recent graduates", correct: false },
                                { text: "It includes only personal information", correct: false }
                            ]
                        },
                        { 
                            question: "Why is a cover letter crucial for job applications?", 
                            answers: [
                                { text: "To replace a resume", correct: false },
                                { text: "It provides an opportunity to connect personal goals to the job role", correct: true },
                                { text: "To list references", correct: false },
                                { text: "To summarize the entire resume", correct: false }
                            ]
                        },
                        { 
                            question: "Why is body language considered a critical part of non-verbal communication?", 
                            answers: [
                                { text: "It is not important in professional settings", correct: false },
                                { text: "It often conveys more emotion and intent than words do", correct: true },
                                { text: "It is only relevant for actors", correct: false },
                                { text: "It does not influence communication", correct: false }
                            ]
                        },
                        { 
                            question: "What is the most important function of a cover letter?", 
                            answers: [
                                { text: "To introduce the applicant and explain their fit for the job", correct: true },
                                { text: "To describe hobbies and interests", correct: false },
                                { text: "To provide salary expectations", correct: false },
                                { text: "To list references", correct: false }
                            ]
                        },
                        { 
                            question: "Which format size is recommended for a cover letter?", 
                            answers: [
                                { text: "Half of an A4 page", correct: false },
                                { text: "One side of A4 paper", correct: true },
                                { text: "Two pages", correct: false },
                                { text: "No size limit", correct: false }
                            ]
                        },
                        { 
                            question: "What is a critical element of structuring a CV according to best practices?", 
                            answers: [
                                { text: "Using decorative fonts", correct: false },
                                { text: "Prioritizing sections based on job relevance", correct: true },
                                { text: "Writing long paragraphs", correct: false },
                                { text: "Including unnecessary details", correct: false }
                            ]
                        },
                        { 
                            question: "Which of the following is a key quality assessed in group discussions?", 
                            answers: [
                                { text: "Speaking the most", correct: false },
                                { text: "Interrupting others", correct: false },
                                { text: "Leadership ability", correct: true },
                                { text: "Staying silent", correct: false }
                            ]
                        },
                        { 
                            question: "Why is proofreading crucial for both cover letters and CVs?", 
                            answers: [
                                { text: "To check for errors in spelling and grammar", correct: true },
                                { text: "To make the document longer", correct: false },
                                { text: "To change formatting styles", correct: false },
                                { text: "To rewrite the entire resume", correct: false }
                            ]
                        },
                        { 
                            question: "If an applicant’s resume states 'Increased company revenue,' which improvement should be made to align with cover letter best practices?", 
                            answers: [
                                { text: "Add specific metrics or examples of how revenue was increased", correct: true },
                                { text: "Make it less detailed", correct: false },
                                { text: "Use vague language", correct: false },
                                { text: "Omit it from the resume", correct: false }
                            ]
                        },
                        { 
                            question: "During a group discussion, if a participant starts dominating the conversation, what should you do to demonstrate leadership skills?", 
                            answers: [
                                { text: "Interrupt them", correct: false },
                                { text: "Politely redirect the focus to others’ contributions", correct: true },
                                { text: "Remain silent", correct: false },
                                { text: "Leave the discussion", correct: false }
                            ]
                        },

                        
                            { 
                                question: "What approach should be taken in a cover letter to demonstrate enthusiasm for the role?", 
                                answers: [
                                    { text: "Use general statements about being hardworking", correct: false },
                                    { text: "Mention specific aspects of the role that align with personal skills", correct: true },
                                    { text: "Make the letter very lengthy", correct: false },
                                    { text: "Avoid mentioning the role at all", correct: false }
                                ]
                            },
                            { 
                                question: "What strategy is most effective for managing a diverse group during a discussion?", 
                                answers: [
                                    { text: "Allow only the most experienced members to speak", correct: false },
                                    { text: "Encourage debate without moderation", correct: false },
                                    { text: "Encouraging all members to share their perspectives", correct: true },
                                    { text: "Focus only on leadership opinions", correct: false }
                                ]
                            },
                            { 
                                question: "How can analytical skills be showcased during a group discussion?", 
                                answers: [
                                    { text: "By speaking more than others", correct: false },
                                    { text: "By agreeing with every point made", correct: false },
                                    { text: "By providing logical arguments and supporting them with evidence", correct: true },
                                    { text: "By interrupting frequently", correct: false }
                                ]
                            },
                            { 
                                question: "Which non-verbal cue is most critical in group discussions?", 
                                answers: [
                                    { text: "Avoiding eye contact", correct: false },
                                    { text: "Maintaining confident but non-intimidating eye contact", correct: true },
                                    { text: "Using exaggerated gestures", correct: false },
                                    { text: "Looking at notes instead of people", correct: false }
                                ]
                            },
                            { 
                                question: "What should you avoid when summarizing a group discussion?", 
                                answers: [
                                    { text: "Offering new perspectives not discussed previously", correct: true },
                                    { text: "Recapping key points made during the discussion", correct: false },
                                    { text: "Acknowledging diverse opinions", correct: false },
                                    { text: "Clarifying conclusions", correct: false }
                                ]
                            },
                            { 
                                question: "What is the key objective of the Fishbowl Group Discussion format?", 
                                answers: [
                                    { text: "To make participants argue", correct: false },
                                    { text: "To enhance interpersonal and discussion skills", correct: true },
                                    { text: "To promote one-sided views", correct: false },
                                    { text: "To limit participation", correct: false }
                                ]
                            },
                            { 
                                question: "What is a rationale for conducting Fishbowl GDs?", 
                                answers: [
                                    { text: "Reducing the teacher’s role in discussions", correct: true },
                                    { text: "Avoiding interactive learning", correct: false },
                                    { text: "Increasing teacher-led discussions", correct: false },
                                    { text: "Minimizing student participation", correct: false }
                                ]
                            },
                            { 
                                question: "What was a significant challenge faced by Encore Battery Company?", 
                                answers: [
                                    { text: "Lack of skilled labor", correct: false },
                                    { text: "Fierce competition in the battery market", correct: true },
                                    { text: "Shortage of raw materials", correct: false },
                                    { text: "High production costs", correct: false }
                                ]
                            },
                            { 
                                question: "What strategy was suggested for the Encore Battery Company to tackle competition?", 
                                answers: [
                                    { text: "Increase prices", correct: false },
                                    { text: "Reduce marketing efforts", correct: false },
                                    { text: "Focus on R&D to innovate", correct: true },
                                    { text: "Cut workforce", correct: false }
                                ]
                            },
                            { 
                                question: "What issue did the Plastic Bottle Company face regarding its head office?", 
                                answers: [
                                    { text: "Lack of clients", correct: false },
                                    { text: "High operational costs", correct: false },
                                    { text: "A dull and dirty building", correct: true },
                                    { text: "Frequent employee turnover", correct: false }
                                ]
                            },
                            { 
                                question: "Which argument was made for keeping the head office of the Plastic Bottle Company in Mumbai?", 
                                answers: [
                                    { text: "Presence of major clients", correct: true },
                                    { text: "Cheaper rent", correct: false },
                                    { text: "Better weather conditions", correct: false },
                                    { text: "Lower taxation policies", correct: false }
                                ]
                            },
                            { 
                                question: "What percentage of the training budget was spent on handling policies and claims at Bajaj Allianz?", 
                                answers: [
                                    { text: "25%", correct: false },
                                    { text: "19%", correct: true },
                                    { text: "30%", correct: false },
                                    { text: "10%", correct: false }
                                ]
                            },
                            { 
                                question: "What was a suggested improvement for training budgets at Bajaj Allianz?", 
                                answers: [
                                    { text: "Reduce training on policies", correct: false },
                                    { text: "Focus only on customer service", correct: false },
                                    { text: "Shift resources to computer skills and financial management", correct: true },
                                    { text: "Eliminate training sessions", correct: false }
                                ]
                            },
                            { 
                                question: "What is one advantage of case study-based GDs in management education?", 
                                answers: [
                                    { text: "Reducing student involvement", correct: false },
                                    { text: "Focusing on theoretical concepts only", correct: false },
                                    { text: "Limiting the scope of discussion", correct: false },
                                    { text: "Enhancing analytical skills", correct: true }
                                ]
                            },
                            { 
                                question: "Why are feedback sessions critical in group discussions?", 
                                answers: [
                                    { text: "To conclude the discussion", correct: false },
                                    { text: "To summarize key points", correct: false },
                                    { text: "To highlight areas of improvement", correct: true },
                                    { text: "To introduce new topics", correct: false }
                                ]
                            },
                            { 
                                question: "What factor often determines the location of a company’s head office?", 
                                answers: [
                                    { text: "Strategic and client-focused location", correct: true },
                                    { text: "Random selection", correct: false },
                                    { text: "Weather conditions", correct: false },
                                    { text: "Availability of public transport", correct: false }
                                ]
                            },
                            { 
                                question: "How can an organization improve its renewal market share?", 
                                answers: [
                                    { text: "By reducing product prices", correct: true },
                                    { text: "By cutting customer service", correct: false },
                                    { text: "By eliminating advertisements", correct: false },
                                    { text: "By increasing product defects", correct: false }
                                ]
                            },
                            { 
                                question: "What is the primary purpose of an evaluation sheet in a GD?", 
                                answers: [
                                    { text: "To provide entertainment", correct: false },
                                    { text: "To document positive and negative behaviors", correct: true },
                                    { text: "To assign random scores", correct: false },
                                    { text: "To track time", correct: false }
                                ]
                            },
                            { 
                                question: "Why is cultural understanding essential when expanding into foreign markets?", 
                                answers: [
                                    { text: "To change local business customs", correct: false },
                                    { text: "To maintain a standardized approach everywhere", correct: false },
                                    { text: "To align business practices with local norms", correct: true },
                                    { text: "To avoid hiring local employees", correct: false }
                                ]
                            },
                            
                                { 
                                    question: "What do employers primarily seek in a candidate during an interview?", 
                                    answers: [
                                        { text: "A friendly personality", correct: false },
                                        { text: "Alignment with organizational goals and job requirements", correct: true },
                                        { text: "High salary expectations", correct: false },
                                        { text: "Extensive experience only", correct: false }
                                    ]
                                },
                                { 
                                    question: "What is the purpose of pre-interview research on an organization?", 
                                    answers: [
                                        { text: "To develop potential questions for the interviewer", correct: true },
                                        { text: "To impress the interviewer with irrelevant facts", correct: false },
                                        { text: "To negotiate a higher salary", correct: false },
                                        { text: "To memorize company policies", correct: false }
                                    ]
                                },
                                { 
                                    question: "Why might an interviewer ask a candidate to describe their weaknesses?", 
                                    answers: [
                                        { text: "To disqualify them", correct: false },
                                        { text: "To evaluate honesty and self-awareness", correct: true },
                                        { text: "To find faults", correct: false },
                                        { text: "To compare with other candidates", correct: false }
                                    ]
                                },
                                { 
                                    question: "Which response is most appropriate when asked about salary expectations?", 
                                    answers: [
                                        { text: "I expect the highest salary possible", correct: false },
                                        { text: "I have no expectations", correct: false },
                                        { text: "Based on industry standards and my skills, I expect a range between X and Y.", correct: true },
                                        { text: "I will accept any salary", correct: false }
                                    ]
                                },
                                { 
                                    question: "If asked how you handle conflict at work, which response demonstrates competence?", 
                                    answers: [
                                        { text: "I avoid conflict completely", correct: false },
                                        { text: "I focus on identifying the root cause and work collaboratively to resolve it.", correct: true },
                                        { text: "I let management handle it", correct: false },
                                        { text: "I confront the person directly", correct: false }
                                    ]
                                },
                                { 
                                    question: "A company organizes fun activities during work hours, but participation is low. What is a likely cause?", 
                                    answers: [
                                        { text: "Employees feel unmotivated due to work stress.", correct: true },
                                        { text: "Employees dislike socializing", correct: false },
                                        { text: "There are too many activities", correct: false },
                                        { text: "Employees prefer working without breaks", correct: false }
                                    ]
                                },
                                { 
                                    question: "How should a candidate demonstrate adaptability during an interview?", 
                                    answers: [
                                        { text: "By sharing examples of adjusting to new roles or situations", correct: true },
                                        { text: "By saying they never face challenges", correct: false },
                                        { text: "By avoiding change", correct: false },
                                        { text: "By refusing to take on new tasks", correct: false }
                                    ]
                                },
                                { 
                                    question: "Which activity is most likely to reduce stress and boost productivity in a workplace?", 
                                    answers: [
                                        { text: "Monthly team-building exercises", correct: true },
                                        { text: "Removing all deadlines", correct: false },
                                        { text: "Reducing employee salaries", correct: false },
                                        { text: "Strictly enforcing work hours", correct: false }
                                    ]
                                },
                                { 
                                    question: "What is the primary reason for organizations to conduct stress interviews?", 
                                    answers: [
                                        { text: "To create a hostile environment", correct: false },
                                        { text: "To evaluate how candidates perform under pressure", correct: true },
                                        { text: "To test candidates' patience", correct: false },
                                        { text: "To eliminate unqualified applicants", correct: false }
                                    ]
                                },
                                { 
                                    question: "Why is active listening critical during an interview?", 
                                    answers: [
                                        { text: "To quickly answer without thinking", correct: false },
                                        { text: "To understand questions fully and provide relevant answers", correct: true },
                                        { text: "To impress the interviewer with long responses", correct: false },
                                        { text: "To avoid making mistakes", correct: false }
                                    ]
                                },
                                { 
                                    question: "How can a candidate best conclude an interview?", 
                                    answers: [
                                        { text: "By asking about salary first", correct: false },
                                        { text: "By leaving immediately", correct: false },
                                        { text: "By expressing gratitude and asking about next steps", correct: true },
                                        { text: "By criticizing the interviewer", correct: false }
                                    ]
                                },
                                { 
                                    question: "Which type of interview questions evaluates communication skills through open-ended scenarios?", 
                                    answers: [
                                        { text: "Technical questions", correct: false },
                                        { text: "Yes/No questions", correct: false },
                                        { text: "Situational questions", correct: true },
                                        { text: "Multiple-choice questions", correct: false }
                                    ]
                                },
                                { 
                                    question: "What does the STAR technique stand for in behavioral interviews?", 
                                    answers: [
                                        { text: "Situation, Task, Action, Result", correct: true },
                                        { text: "Strategy, Timing, Action, Response", correct: false },
                                        { text: "Situation, Task, Answer, Reason", correct: false },
                                        { text: "Structure, Talk, Assess, React", correct: false }
                                    ]
                                },
                                { 
                                    question: "Which of the following is a limitation of telephonic interviews?", 
                                    answers: [
                                        { text: "Inability to see body language", correct: true },
                                        { text: "Longer interview time", correct: false },
                                        { text: "Higher costs", correct: false },
                                        { text: "Better voice clarity", correct: false }
                                    ]
                                },
                                { 
                                    question: "In a video interview, what is recommended to convey confidence and energy?", 
                                    answers: [
                                        { text: "Fidgeting constantly", correct: false },
                                        { text: "Looking away from the camera", correct: false },
                                        { text: "Smiling", correct: true },
                                        { text: "Avoiding facial expressions", correct: false }
                                    ]
                                },
                                { 
                                    question: "In the 'Life is a Ball Game' activity, what did the largest ball represent?", 
                                    answers: [
                                        { text: "Career", correct: false },
                                        { text: "Friends", correct: false },
                                        { text: "Hobbies", correct: false },
                                        { text: "Family", correct: true }
                                    ]
                                },
                                { 
                                    question: "What percentage of communication in interviews is conveyed through nonverbal cues?", 
                                    answers: [
                                        { text: "30%", correct: false },
                                        { text: "70%", correct: false },
                                        { text: "55%", correct: true },
                                        { text: "90%", correct: false }
                                    ]
                                },
                                { 
                                    question: "What is the primary purpose of behavioral interview questions?", 
                                    answers: [
                                        { text: "To test candidates on random knowledge", correct: false },
                                        { text: "To evaluate past experiences and responses", correct: true },
                                        { text: "To assess general knowledge", correct: false },
                                        { text: "To ask trick questions", correct: false }
                                    ]
                                }
                            ];


let currentQuestionIndex = 0;
let score = 0;
let startTime, endTime, totalTime; // Variables for tracking time
let intervalId; // Stores the timer interval


const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");


// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    nextButton.style.display = "none";
    showQuestion();
}

// Show Next Question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

// Reset UI State
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

// Handle Answer Selection
function selectAnswer(selectedButton, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answers.find(ans => ans.correct);
    
    if (selectedAnswer.correct) {
        score++;
        selectedButton.style.backgroundColor = "green"; // ✅ Highlight correct selection
    } else {
        selectedButton.style.backgroundColor = "red"; // ❌ Highlight wrong selection
        // Highlight correct answer in green
        Array.from(answerButtons.children).forEach(button => {
            if (button.innerText === correctAnswer.text) {
                button.style.backgroundColor = "green";
            }
        });
    }

    // Disable all buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => button.disabled = true);
    
    nextButton.style.display = "block";
}

// Move to Next Question
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Function to search for an explanation of the selected question




// ✅ Function to search for an explanation using Wikipedia API
// Function to open Google Search for the question
// Function to open a small popup window for Google Search
// Function to open a small Google Search popup (like an extension)
// Function to open a super small Google Search popup
// Function to open a compact Google Search popup right next to the button
function searchExplanation(question, event) {
    let keywords = extractKeywords(question);
    if (!keywords) {
        alert("No suitable search terms found.");
        return;
    }

    const searchQuery = encodeURIComponent(keywords + " explanation");
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;

    // ✅ Get button position
    let buttonRect = event.target.getBoundingClientRect(); 
    let leftPosition = buttonRect.right + 10; // Position popup to the right of the button
    let topPosition = buttonRect.top; // Align vertically with the button

    // ✅ Open a small Google search window **on the right side of the button**
    window.open(
        googleSearchUrl, 
        "GoogleSearchPopup", 
        `width=350,height=300,scrollbars=yes,resizable=no,toolbar=no,menubar=no,status=no,left=${leftPosition},top=${topPosition}`
    );
}

// ✅ Function to extract key topics from the question
function extractKeywords(question) {
    const stopWords = ["what", "which", "of", "the", "is", "a", "in", "how", "to", "why", "best", "following"];
    let words = question.toLowerCase().replace(/[^\w\s]/g, "").split(" ");
    let filteredWords = words.filter(word => !stopWords.includes(word));

    return filteredWords.length ? filteredWords.slice(0, 5).join(" ") : null; // ✅ Take first 5 keywords
}

// ✅ Modify `selectAnswer()` to include "Search Explanation" button
function selectAnswer(selectedButton, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answers.find(ans => ans.correct);

    if (selectedAnswer.correct) {
        score++;
        selectedButton.style.backgroundColor = "green"; // ✅ Highlight correct selection
    } else {
        selectedButton.style.backgroundColor = "red"; // ❌ Highlight wrong selection
        // Highlight correct answer in green
        Array.from(answerButtons.children).forEach(button => {
            if (button.innerText === correctAnswer.text) {
                button.style.backgroundColor = "green";
            }
        });
    }

    // Disable all buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => button.disabled = true);

    // ✅ Add "Search Explanation" Button
    const searchButton = document.createElement("button");
    searchButton.innerText = "";
    searchButton.classList.add("btn");
    searchButton.id = "search-explanation-btn"; // ✅ Apply CSS styling
    searchButton.onclick = (event) => searchExplanation(questionText.innerText, event);

     // ✅ Add Text Label
     const textLabel = document.createElement("span");
     textLabel.innerText = "Search on Google"; // ✅ Display text
     // ✅ Add Google Logo Image
    
    // ✅ Add Local Google Logo Image
    const googleLogo = document.createElement("img");
    googleLogo.src = "google.png"; // ✅ Load from local folder
    googleLogo.alt = "Google Search";
    googleLogo.classList.add("google-logo"); // ✅ Apply CSS class

    searchButton.appendChild(textLabel);
    searchButton.appendChild(googleLogo);
    answerButtons.appendChild(searchButton);
    
    nextButton.style.display = "block";
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startTime = new Date(); // ✅ Capture start time
    intervalId = setInterval(updateTimer, 1000); // ✅ Start updating time every second
    
    nextButton.style.display = "none";
    showQuestion();
}

function updateTimer() {
    let now = new Date();
    let elapsedTime = Math.floor((now - startTime) / 1000); // ✅ Convert milliseconds to seconds

    // Format time as MM:SS
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    document.getElementById("timer").innerText = `Time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}


// Show Final Score (Corrected)
// Show Final Score (with Percentage)
function showResult() {
    clearInterval(intervalId); // ✅ Stop the timer
    endTime = new Date(); // ✅ Capture end time
    totalTime = Math.floor((endTime - startTime) / 1000); // ✅ Calculate total seconds

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
    document.getElementById("time-spent").innerText = `Total Time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    
    questionText.innerText = ""; 
    answerButtons.innerHTML = ""; 
    nextButton.style.display = "none"; 
    resultContainer.classList.remove("hidden");
}



// Restart Quiz
function restartQuiz() {
    startQuiz();
}

startQuiz();
