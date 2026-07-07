import os

latest_faang = """
## 5. Latest 2026 Interview Trends
- **AI & LLM Integration**: System design questions now frequently ask how to integrate large language models (LLMs), design RAG (Retrieval-Augmented Generation) architectures, or handle high-latency API responses from AI models.
- **Modern Frontend**: Questions heavily favor Next.js (App Router, Server Components), hydration mismatch debugging, and Micro-frontends (Module Federation).
- **Cloud & Serverless**: Emphasis on AWS Lambda cold starts, edge computing (Cloudflare Workers), and distributed caching strategies for global scale.
- **Resource**: [Designing Machine Learning Systems (Chip Huyen)](https://huyenchip.com/machine-learning-systems-design/)
"""

latest_service = """
## 5. Latest 2026 Interview Trends
- **Cloud Migration**: Questions frequently revolve around migrating legacy monoliths to AWS/Azure, utilizing containerization (Docker/Kubernetes).
- **Security & DevSecOps**: Expect questions on OWASP Top 10, securing APIs with OAuth2/OIDC, and automated CI/CD pipeline security.
- **Modern JavaScript**: Extensive focus on TypeScript adoption, strict typing, and migrating large codebases from JavaScript to TypeScript.
- **Resource**: [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
"""

output_dir = "/home/soumayaranjanrout/Desktop/Practice/interview_prep/12-company-questions"

for filename in os.listdir(output_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(output_dir, filename)
        
        c_type = "faang"
        service_companies = ["tcs", "infosys", "wipro", "accenture", "cognizant", "hcltech", "tech-mahindra", "capgemini", "ibm", "deloitte", "other"]
        
        for sc in service_companies:
            if sc in filename:
                c_type = "service"
                break
                
        with open(filepath, 'a') as f:
            if c_type == "faang":
                f.write(latest_faang)
            else:
                f.write(latest_service)

print("Appended latest 2026 trends to all files.")
