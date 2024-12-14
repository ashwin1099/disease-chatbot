const diseasesData = {
    "COVID-19": {
        overview: "COVID-19 is a respiratory illness caused by the coronavirus SARS-CoV-2.",
        symptoms: [
            "Fever",
            "Cough",
            "Shortness of breath",
            "Fatigue",
            "Loss of taste or smell"
        ],
        prevention: [
            "Wear a mask",
            "Practice social distancing",
            "Wash hands frequently",
            "Vaccination"
        ],
        precautions: [
            "Avoid close contact with infected individuals",
            "Stay at home if feeling unwell",
            "Self-isolate if you have symptoms"
        ],
        medicines: [
            "Antiviral drugs (e.g., Remdesivir)",
            "Steroids (e.g., Dexamethasone)",
            "Oxygen therapy (in severe cases)"
        ]
    },
    "Malaria": {
        overview: "Malaria is a mosquito-borne infectious disease caused by Plasmodium parasites.",
        symptoms: [
            "Fever",
            "Chills",
            "Headache",
            "Sweats",
            "Nausea"
        ],
        prevention: [
            "Use insect repellent",
            "Sleep under insecticide-treated bed nets",
            "Take antimalarial medication (for travelers)"
        ],
        precautions: [
            "Avoid mosquito bites",
            "Seek medical attention if you develop symptoms"
        ],
        medicines: [
            "Chloroquine",
            "Artemisinin-based combination therapies (ACT)"
        ]
    },
    "Common Cold": {
        overview: "The common cold is a viral infection of the upper respiratory tract.",
        symptoms: [
            "Runny or stuffy nose",
            "Sore throat",
            "Cough",
            "Sneezing",
            "Mild fever"
        ],
        prevention: [
            "Wash hands regularly",
            "Avoid close contact with infected individuals",
            "Avoid touching your face"
        ],
        precautions: [
            "Rest and hydrate",
            "Use over-the-counter cold medications for symptom relief",
            "Wear mask in public area"
        ],
        medicines: [
            "Decongestants (e.g., Pseudoephedrine)",
            "Pain relievers (e.g., Acetaminophen)"
        ]
    },
    "Fever": {
        overview: "Fever is a temporary increase in body temperature, often due to an infection.",
        symptoms: [
            "High temperature",
            "Chills",
            "Sweating",
            "Headache",
            "Muscle aches"
        ],
        prevention: [
            "Avoid close contact with sick people",
            "Boost immune health with proper nutrition"
        ],
        precautions: [
            "Rest and stay hydrated",
            "Take fever-reducing medications (e.g., Paracetamol)"
        ],
        medicines: [
            "Paracetamol (Acetaminophen)",
            "Ibuprofen"
        ]
    },
    "Cough": {
        overview: "Cough is a reflex action to clear your airways of mucus, irritants, or foreign particles.",
        symptoms: [
            "Dry or productive (with mucus) cough",
            "Sore throat",
            "Shortness of breath"
        ],
        prevention: [
            "Avoid irritants like smoke",
            "Practice good hygiene"
        ],
        precautions: [
            "Use cough suppressants or expectorants if needed",
            "Consult a doctor if cough lasts more than 3 weeks"
        ],
        medicines: [
            "Cough suppressants (e.g., Dextromethorphan)",
            "Expectorants (e.g., Guaifenesin)"
        ]
    },
    "Chickenpox": {
        overview: "Chickenpox is a highly contagious viral infection caused by the varicella-zoster virus.",
        symptoms: [
            "Red, itchy rash that turns into blisters",
            "Fever",
            "Fatigue",
            "Loss of appetite"
        ],
        prevention: [
            "Get vaccinated (Varicella vaccine)",
            "Avoid contact with infected individuals"
        ],
        precautions: [
            "Avoid scratching the rash",
            "Stay home until all blisters have scabbed over"
        ],
        medicines: [
            "Antihistamines for itching",
            "Acetaminophen for fever",
            "Acyclovir (in severe cases)"
        ]
    },
    "Dengue": {
        overview: "Dengue is a viral illness transmitted by Aedes mosquitoes.",
        symptoms: [
            "High fever",
            "Severe headache",
            "Pain behind the eyes",
            "Joint and muscle pain",
            "Skin rash"
        ],
        prevention: [
            "Use insect repellent",
            "Wear long sleeves and pants",
            "Eliminate mosquito breeding sites"
        ],
        precautions: [
            "Seek medical attention if you develop symptoms",
            "Stay hydrated and rest"
        ],
        medicines: [
            "Paracetamol (for fever relief)",
            "IV fluids (in severe cases)"
        ]
    },
    "Viral Fever": {
        overview: "Viral fever is caused by a variety of viral infections and typically leads to an elevated body temperature.",
        symptoms: [
            "Fever",
            "Chills",
            "Body aches",
            "Fatigue"
        ],
        prevention: [
            "Avoid close contact with infected individuals",
            "Wash hands frequently"
        ],
        precautions: [
            "Stay hydrated",
            "Rest and take fever-reducing medication"
        ],
        medicines: [
            "Paracetamol",
            "Ibuprofen"
        ]
    },
    "Asthma": {
        overview: "Asthma is a chronic condition that affects the airways, causing difficulty in breathing.",
        symptoms: [
            "Shortness of breath",
            "Wheezing",
            "Coughing",
            "Chest tightness"
        ],
        prevention: [
            "Avoid asthma triggers (e.g., allergens, smoke)",
            "Use inhalers regularly"
        ],
        precautions: [
            "Use bronchodilators and corticosteroids as prescribed",
            "Monitor asthma symptoms regularly"
        ],
        medicines: [
            "Albuterol (bronchodilator)",
            "Fluticasone (inhaled corticosteroid)"
        ]
    },
    "Thyroid Disorders": {
        overview: "Thyroid disorders occur when the thyroid gland produces too much or too little thyroid hormone.",
        symptoms: [
            "Fatigue",
            "Weight gain or loss",
            "Mood swings",
            "Cold or heat intolerance"
        ],
        prevention: [
            "Regular thyroid function checkups",
            "Maintain a balanced diet"
        ],
        precautions: [
            "Follow prescribed thyroid medications",
            "Monitor iodine intake"
        ],
        medicines: [
            "Levothyroxine (for hypothyroidism)",
            "Methimazole (for hyperthyroidism)"
        ]
    },
    "Chikungunya": {
        overview: "Chikungunya is a viral disease transmitted by Aedes mosquitoes.",
        symptoms: [
            "High fever",
            "Severe joint pain",
            "Rash",
            "Fatigue"
        ],
        prevention: [
            "Use mosquito repellent",
            "Wear long-sleeved clothing",
            "Eliminate mosquito breeding grounds"
        ],
        precautions: [
            "Rest and hydrate",
            "Pain relievers for joint pain"
        ],
        medicines: [
            "Paracetamol (for fever and pain relief)"
        ]
    },

    "hi": {
    overview: "Hi, what's your disease?"
},
    "HIV": {
        overview: "HIV (Human Immunodeficiency Virus) attacks the immune system, and AIDS is the final stage of HIV infection.",
        symptoms: [
            "Fever",
            "Swollen lymph nodes",
            "Weight loss",
            "Chronic diarrhea",
            "Fatigue"
        ],
        prevention: [
            "Use condoms during sexual activity",
            "Get tested and know your partner’s HIV status",
            "Avoid sharing needles or syringes"
        ],
        precautions: [
            "Adhere to antiretroviral therapy (ART)",
            "Regular HIV testing",
            "Healthy lifestyle"
        ],
        medicines: [
            "Antiretroviral therapy (ART)",
            "NRTIs (e.g., Zidovudine)",
            "PIs (e.g., Lopinavir)"
        ]
    },
    "Heart Disease": {
        overview: "Heart disease refers to a range of conditions that affect the heart, including coronary artery disease, heart attacks, and heart failure.",
        symptoms: [
            "Chest pain or discomfort",
            "Shortness of breath",
            "Fatigue",
            "Irregular heartbeat"
        ],
        prevention: [
            "Maintain a healthy diet",
            "Exercise regularly",
            "Avoid smoking",
            "Control blood pressure and cholesterol levels"
        ],
        precautions: [
            "Take prescribed heart medications as directed",
            "Avoid excessive alcohol consumption",
            "Regular check-ups with a cardiologist"
        ],
        medicines: [
            "Beta-blockers",
            "ACE inhibitors",
            "Statins"
        ]
    },
    "Pneumonia": {
        overview: "Pneumonia is an infection that inflames the air sacs in one or both lungs.",
        symptoms: [
            "Cough with mucus",
            "Shortness of breath",
            "Chest pain",
            "Fatigue"
        ],
        prevention: [
            "Get vaccinated",
            "Avoid smoking",
            "Wash hands regularly"
        ],
        precautions: [
            "Seek medical care if symptoms worsen",
            "Rest and stay hydrated"
        ],
        medicines: [
            "Antibiotics (for bacterial pneumonia)",
            "Antiviral drugs (for viral pneumonia)"
        ]
    },
    "Tuberculosis (TB)": {
        overview: "Tuberculosis (TB) is a bacterial infection that primarily affects the lungs.",
        symptoms: [
            "Cough that lasts more than three weeks",
            "Coughing up blood",
            "Night sweats",
            "Fatigue"
        ],
        prevention: [
            "Get tested if you are at risk",
            "Complete the prescribed TB treatment course"
        ],
        precautions: [
            "Use a mask when coughing",
            "Avoid close contact with others if contagious"
        ],
        medicines: [
            "Antibiotics (e.g., Isoniazid, Rifampin)"
        ]
    },
    "Diabetes": {
        overview: "Diabetes is a chronic condition that affects how your body processes blood sugar (glucose).",
        symptoms: [
            "Frequent urination",
            "Excessive thirst",
            "Fatigue",
            "Blurred vision"
        ],
        prevention: [
            "Maintain a healthy diet",
            "Exercise regularly",
            "Monitor blood sugar levels"
        ],
        precautions: [
            "Take insulin or other prescribed medication",
            "Avoid high sugar intake"
        ],
        medicines: [
            "Insulin",
            "Metformin",
            "Sulfonylureas"
        ]
    },
   "AIDS": {
    overview: "AIDS (Acquired Immunodeficiency Syndrome) is the final stage of HIV infection, where the immune system becomes severely damaged, making the body vulnerable to infections and certain cancers.",
    symptoms: [
        "Rapid weight loss",
        "Recurring fever",
        "Extreme tiredness",
        "Swollen lymph nodes",
        "Diarrhea",
        "Sores in mouth, anus, or genitals",
        "Pneumonia"
    ],
    prevention: [
        "Use condoms during sexual activity",
        "Get tested regularly and know your partner’s HIV status",
        "Avoid sharing needles or syringes",
        "Take pre-exposure prophylaxis (PrEP) if at high risk"
    ],
    precautions: [
        "Adhere to antiretroviral therapy (ART)",
        "Maintain a healthy lifestyle to boost the immune system",
        "Regular check-ups and screenings for infections or cancers"
    ],
    medicines: [
        "Antiretroviral therapy (ART)",
        "NRTIs (e.g., Zidovudine)",
        "PIs (e.g., Lopinavir)",
        "Integrase inhibitors (e.g., Dolutegravir)"
    ]
},  
    "Influenza (Flu)": {
        overview: "Influenza, commonly known as the flu, is a viral infection that attacks the respiratory system.",
        symptoms: [
            "Fever",
            "Cough",
            "Body aches",
            "Sore throat"
        ],
        prevention: [
            "Get the flu vaccine",
            "Wash hands frequently",
            "Avoid close contact with sick individuals"
        ],
        precautions: [
            "Rest and stay hydrated",
            "Use antiviral medications (in some cases)"
        ],
        medicines: [
            "Antiviral drugs (e.g., Oseltamivir)"
        ]
    },

    "Gastroenteritis": {
        overview: "Gastroenteritis is an inflammation of the stomach and intestines, usually caused by viral or bacterial infections.",
        symptoms: [
            "Diarrhea",
            "Vomiting",
            "Stomach cramps",
            "Fever",
            "Dehydration"
        ],
        prevention: [
            "Wash hands regularly",
            "Avoid consuming contaminated food or water",
            "Practice good hygiene"
        ],
        precautions: [
            "Stay hydrated",
            "Avoid solid foods during acute symptoms",
            "Rest"
        ],
        medicines: [
            "Oral rehydration solutions",
            "Antidiarrheal medications (e.g., Loperamide)",
            "Antibiotics (if bacterial infection is diagnosed)"
        ]
    },
    "Hepatitis B": {
        overview: "Hepatitis B is a viral infection that affects the liver, often leading to chronic liver disease.",
        symptoms: [
            "Jaundice (yellowing of the skin and eyes)",
            "Fatigue",
            "Abdominal pain",
            "Loss of appetite",
            "Dark urine"
        ],
        prevention: [
            "Get vaccinated against Hepatitis B",
            "Avoid sharing needles or personal items",
            "Practice safe sex"
        ],
        precautions: [
            "Regular monitoring of liver function",
            "Adhere to prescribed antiviral medications"
        ],
        medicines: [
            "Antiviral drugs (e.g., Tenofovir, Entecavir)"
        ]
    },
    "Osteoarthritis": {
        overview: "Osteoarthritis is a degenerative joint disease where cartilage breaks down, leading to pain, swelling, and reduced motion.",
        symptoms: [
            "Joint pain and stiffness",
            "Swelling around the joints",
            "Decreased range of motion",
            "Tenderness when pressing on joints"
        ],
        prevention: [
            "Maintain a healthy weight",
            "Regular exercise to strengthen muscles around joints",
            "Avoid repetitive stress on joints"
        ],
        precautions: [
            "Use pain relief medications as prescribed",
            "Consider joint injections if pain persists"
        ],
        medicines: [
            "Pain relievers (e.g., Acetaminophen, Ibuprofen)",
            "Corticosteroid injections",
            "Hyaluronic acid injections"
        ]
    },
    "Anemia": {
        overview: "Anemia is a condition where there is a lack of healthy red blood cells or hemoglobin in the blood, leading to reduced oxygen flow to the body’s organs.",
        symptoms: [
            "Fatigue",
            "Paleness",
            "Shortness of breath",
            "Dizziness",
            "Cold hands and feet"
        ],
        prevention: [
            "Maintain a diet rich in iron, vitamin B12, and folic acid",
            "Regular blood tests to monitor levels"
        ],
        precautions: [
            "Take iron or vitamin supplements if prescribed",
            "Avoid excessive alcohol intake"
        ],
        medicines: [
            "Iron supplements",
            "Vitamin B12 injections or supplements",
            "Folic acid supplements"
        ]
    },
    "Cervical Cancer": {
        overview: "Cervical cancer is a cancer that occurs in the cells of the cervix, often caused by persistent infection with certain types of human papillomavirus (HPV).",
        symptoms: [
            "Abnormal vaginal bleeding",
            "Pelvic pain",
            "Pain during intercourse",
            "Unusual vaginal discharge"
        ],
        prevention: [
            "Get vaccinated against HPV",
            "Routine Pap smears for early detection"
        ],
        precautions: [
            "Regular gynecological check-ups",
            "Follow-up treatment after diagnosis"
        ],
        medicines: [
            "Chemotherapy",
            "Radiation therapy",
            "Surgical treatments"
        ]
    },
    "Sickle Cell Anemia": {
        overview: "Sickle cell anemia is a genetic blood disorder where red blood cells become misshapen, causing pain and potential organ damage.",
        symptoms: [
            "Episodes of pain (called sickle cell crises)",
            "Fatigue",
            "Swelling in the hands and feet",
            "Frequent infections"
        ],
        prevention: [
            "Genetic counseling before having children",
            "Stay hydrated to prevent sickle cell crises"
        ],
        precautions: [
            "Pain management during crises",
            "Regular blood transfusions if required"
        ],
        medicines: [
            "Pain relievers",
            "Hydroxyurea",
            "Blood transfusions"
        ]
    },
    "Chronic Kidney Disease (CKD)": {
        overview: "Chronic kidney disease is the gradual loss of kidney function over time, leading to kidney failure if untreated.",
        symptoms: [
            "Fatigue",
            "Swelling in the legs and ankles",
            "Frequent urination",
            "Shortness of breath",
            "Confusion"
        ],
        prevention: [
            "Control blood pressure and blood sugar levels",
            "Avoid smoking and excessive alcohol consumption"
        ],
        precautions: [
            "Follow a kidney-friendly diet",
            "Monitor kidney function regularly"
        ],
        medicines: [
            "Blood pressure medications (e.g., ACE inhibitors)",
            "Diuretics",
            "Erythropoiesis-stimulating agents (ESA) if anemia is present"
        ]
    },
    "Multiple Sclerosis (MS)": {
        overview: "Multiple sclerosis is a chronic autoimmune disease that affects the central nervous system, causing symptoms such as muscle weakness, numbness, and coordination problems.",
        symptoms: [
            "Fatigue",
            "Numbness or tingling in limbs",
            "Vision problems",
            "Difficulty walking",
            "Muscle weakness"
        ],
        prevention: [
            "Avoid excessive heat, which can trigger symptoms",
            "Maintain a healthy diet and exercise routine"
        ],
        precautions: [
            "Physical therapy to manage mobility issues",
            "Disease-modifying therapies to slow progression"
        ],
        medicines: [
            "Disease-modifying therapies (e.g., Interferon beta)",
            "Corticosteroids for relapses",
            "Muscle relaxants"
        ]
    },
    "Heart Disease": {
    overview: "Heart disease refers to a range of conditions that affect the heart, including coronary artery disease, heart attacks, and heart failure.",
    symptoms: [
        "Chest pain or discomfort",
        "Shortness of breath",
        "Fatigue",
        "Irregular heartbeat"
    ],
    prevention: [
        "Maintain a healthy diet",
        "Exercise regularly",
        "Avoid smoking",
        "Control blood pressure and cholesterol levels"
    ],
    precautions: [
        "Take prescribed heart medications as directed",
        "Avoid excessive alcohol consumption",
        "Regular check-ups with a cardiologist"
    ],
    medicines: [
        "Beta-blockers",
        "ACE inhibitors",
        "Statins"
    ]
},
    "Alzheimer's Disease": {
        overview: "Alzheimer's disease is a progressive neurodegenerative disorder that causes memory loss, confusion, and changes in behavior.",
        symptoms: [
            "Memory loss",
            "Difficulty with problem-solving",
            "Disorientation",
            "Changes in mood or behavior"
        ],
        prevention: [
            "Maintain a healthy lifestyle with physical and mental exercise",
            "Eat a balanced diet rich in antioxidants"
        ],
        precautions: [
            "Create a safe environment to prevent wandering",
            "Regular check-ups for cognitive function"
        ],
        medicines: [
            "Donepezil",
            "Memantine",
            "Antidepressants (if needed)"
        ]
    }
    // Add more diseases here...
};
