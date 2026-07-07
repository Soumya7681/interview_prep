import re

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/page.tsx", "r") as f:
    content = f.read()

schema_json = """
        {/* SEO JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is this full-stack interview prep really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The entire curriculum, including over 200+ Data Structures & Algorithms questions, system design guides, and React/Node.js cheat sheets, is 100% open-source and free forever."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which companies are these questions meant for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our curriculum is meticulously categorized into FAANG (Google, Amazon, Meta, Microsoft, Oracle) and top Service companies (TCS, Infosys, Wipro, Accenture). We track the exact questions asked in their most recent 2026 hiring cycles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to know both React and NestJS?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While the book heavily features React on the frontend and Node.js/NestJS on the backend, the core architectural concepts (System Design, Microservices, Authentication, Database Indexing) apply universally across any technology stack."
                  }
                }
              ]
            })
          }}
        />

        <footer className="np-footer">
"""

new_content = content.replace('<footer className="np-footer">', schema_json.strip())

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/page.tsx", "w") as f:
    f.write(new_content)

print("Injected JSON-LD Schema into page.tsx")
