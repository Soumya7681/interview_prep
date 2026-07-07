import os

companies = [
    ("07", "wipro", "Wipro"),
    ("08", "accenture", "Accenture"),
    ("09", "cognizant", "Cognizant"),
    ("10", "hcltech", "HCLTech"),
    ("11", "tech-mahindra", "Tech Mahindra"),
    ("12", "capgemini", "Capgemini"),
    ("13", "ibm", "IBM"),
    ("14", "deloitte", "Deloitte"),
    ("15", "oracle", "Oracle"),
    ("16", "sap", "SAP"),
    ("17", "adobe", "Adobe"),
    ("18", "flipkart", "Flipkart"),
    ("19", "paytm", "Paytm"),
    ("20", "zoho", "Zoho"),
    ("21", "swiggy", "Swiggy"),
    ("22", "phonepe", "PhonePe"),
    ("23", "other", "Other Companies"),
]

output_dir = "/home/soumayaranjanrout/Desktop/Practice/interview_prep/12-company-questions"
os.makedirs(output_dir, exist_ok=True)

for num, slug, name in companies:
    filename = f"{num}-{slug}.md"
    filepath = os.path.join(output_dir, filename)
    content = f"""# {name} Full-Stack Developer Interview Questions

## 1. Overview
The interview process at {name} for a Full Stack Developer typically focuses on your ability to deliver end-to-end solutions, strong foundational knowledge, and practical problem-solving.

## 2. Technical Focus
- **Frontend**: Expect questions on component architecture, state management (Redux/Context), and UI performance optimization.
- **Backend**: Focus on REST API design, database schema modeling, and writing efficient SQL/NoSQL queries.
- **Data Structures**: Foundational algorithms, string manipulation, and array handling.

## 3. Behavioral and Managerial
- Be prepared to discuss your project experience using the STAR method.
- Focus on how you handle tight deadlines, team collaboration, and client requirements.
"""
    with open(filepath, 'w') as f:
        f.write(content)

print("Files created successfully.")
