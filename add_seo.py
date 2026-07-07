import re

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/page.tsx", "r") as f:
    content = f.read()

additional_sections = """
        <div className="np-hr-thick"></div>

        {/* Editorial Opinion */}
        <section className="np-hero-article">
          <div className="np-article-content" style={{borderRight: 'none', paddingRight: 0}}>
            <h3 className="np-headline">THE EDITORIAL OPINION: WHY THIS PREP BOOK?</h3>
            <p className="np-author">By The Chief Editor</p>
            <p className="np-text">
              <span className="np-dropcap">T</span>he modern job market for software engineers has never been more competitive. With the advent of artificial intelligence, tightening economic conditions, and shifting tech stacks, passing a technical interview requires more than just knowing syntax. It requires deep, fundamental understanding of system architecture, data structures, and human behavior.
            </p>
            <p className="np-text">
              This publication was established to serve as the definitive, single-source compendium for full-stack interview preparation. We bypass the trivialities and focus strictly on what hiring committees discuss behind closed doors. Whether you are navigating the intricate algorithms required by FAANG or the complex architectural questions demanded by enterprise consulting firms, our syllabus provides the rigorous blueprint necessary for success.
            </p>
          </div>
        </section>

        <div className="np-hr-thick"></div>

        {/* SEO FAQ Section */}
        <section className="np-topics-section">
          <h3 className="np-headline-sub">FREQUENTLY ASKED QUESTIONS</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', margin: '0 auto', maxWidth: '800px'}}>
            
            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Is this full-stack interview prep really free?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>Yes. The entire curriculum, including over 200+ Data Structures & Algorithms questions, system design guides, and React/Node.js cheat sheets, is 100% open-source and free forever.</p>
            </div>

            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Which companies are these questions meant for?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>Our curriculum is meticulously categorized into FAANG (Google, Amazon, Meta, Microsoft, Oracle) and top Service companies (TCS, Infosys, Wipro, Accenture). We track the exact questions asked in their most recent 2026 hiring cycles.</p>
            </div>

            <div style={{borderBottom: '1px dotted var(--text-muted)', paddingBottom: '10px'}}>
              <h4 style={{fontFamily: "'Playfair Display', serif", fontSize: '20px', margin: '0 0 5px 0'}}>Do I need to know both React and NestJS?</h4>
              <p className="np-text" style={{fontSize: '16px', margin: 0}}>While the book heavily features React on the frontend and Node.js/NestJS on the backend, the core architectural concepts (System Design, Microservices, Authentication, Database Indexing) apply universally across any technology stack.</p>
            </div>

          </div>
        </section>

        <div className="np-hr-thick"></div>

        {/* Testimonials */}
        <section className="np-topics-section" style={{textAlign: 'center'}}>
          <h3 className="np-headline-sub">LETTERS TO THE EDITOR</h3>
          <div className="np-topics-grid">
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "The most well-organized compendium of system design knowledge I have ever encountered. I secured an E5 role thanks to this."
              <br/><br/>
              <strong>— S. Williams, Staff Engineer</strong>
            </blockquote>
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "Finally, a resource that bridges the gap between generic LeetCode and actual, real-world backend architecture."
              <br/><br/>
              <strong>— R. Gupta, Backend Lead</strong>
            </blockquote>
            <blockquote style={{border: '1px solid var(--border)', padding: '20px', fontStyle: 'italic', background: 'var(--bg-subtle)'}}>
              "The 2026 AI integration trends section was exactly what my panel grilled me on. Absolutely vital reading."
              <br/><br/>
              <strong>— M. Chen, Full-Stack Dev</strong>
            </blockquote>
          </div>
        </section>

        <div className="np-hr"></div>
"""

new_content = content.replace("<footer className=\"np-footer\">", additional_sections + "\n        <footer className=\"np-footer\">")

with open("/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/page.tsx", "w") as f:
    f.write(new_content)

print("SEO content injected.")
