import re

css_path = "/home/soumayaranjanrout/Desktop/Practice/interview_prep/app/globals.css"

with open(css_path, "r") as f:
    content = f.read()

# Replace all blue/purple gradients with solid accent colors or more muted borders
content = content.replace("linear-gradient(135deg, #6366f1, #a855f7)", "var(--accent)")
content = content.replace("linear-gradient(90deg, #6366f1, #a855f7)", "var(--accent)")
content = content.replace("linear-gradient(135deg, var(--text) 30%, #a855f7 100%)", "var(--text)")
content = content.replace("linear-gradient(145deg, var(--bg-elev), var(--bg-subtle))", "var(--bg-elev)")
content = content.replace("box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39)", "box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1)")
content = content.replace("box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5)", "box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2)")

with open(css_path, "w") as f:
    f.write(content)

print("Blue gradients removed from global CSS.")
