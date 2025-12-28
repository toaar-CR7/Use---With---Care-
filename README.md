# Use With Care  
## Responsible and Ethical AI Usage Auditor

**Use With Care** is an AI-powered web application that helps users decide whether artificial intelligence should be used for a given task, how much assistance is appropriate, or when AI should be avoided entirely.

The project promotes responsible, ethical, and thoughtful adoption of AI, especially among students and early users of generative AI technologies.

---

## Problem Statement

With the rapid growth of generative AI tools, many users:
- Depend blindly on AI for learning and decision-making
- Use AI in situations that require human judgment and responsibility
- Risk ethical, academic, or safety issues due to overuse
- student's academic progress hampered due too unnecessary AI usage.

The challenge is not AI itself, but uninformed and careless AI usage.

---

## Solution and Solution Overview

# Our solution: UseWithCare website

Use With Care acts as an AI auditor rather than an AI replacement.

Instead of performing tasks for the user, the system:
- Analyzes the nature of the task
- Evaluates whether AI usage is appropriate
- Recommends the correct level of AI involvement

Possible outcomes include:
- Safe to use AI
- Only slight AI assistance
- Do not use AI

Each evaluation includes a clear explanation and a recommendation/advice along with the reccomendation of tool/person to take help from.

---

## How the System Works

1. The user enters a task or topic.
2. The frontend sends the input to a secure backend API.
3. A serverless function evaluates the task using AI.
4. The system returns a structured response containing:
   - AI suitability status
   - Human-readable advice
   - Recommended tool or approach/person to take help from
5. The frontend displays the result in a clear and understandable format.

---

## Technology Stack

### Frontend
- HTML
- Tailwind CSS
- JavaScript
- Firebase Authentication (Google Sign-In)

### Backend
- Netlify Serverless Functions
- Node.js (version 18 or higher)

### Artificial Intelligence
- Google Gemini (Generative AI)
- Google Generative AI SDK for JavaScript

### Deployment
- Netlify

---

## Google Technologies Used

- Google Gemini for task analysis and AI suitability evaluation
- Google Generative AI SDK for secure server-side AI integration
- Responsible AI design principles aligned with Google’s AI ethics framework
- Firebase authentication to create a login system for personalized and proper usage of the website. 
---

## Impact

Use With Care encourages:
- Critical thinking over blind automation
- Ethical and responsible AI adoption
- Human-in-the-loop decision making
- Promotes student progress by limiting AI overuse
- Awareness that not every problem requires AI

---

## Future Scope

- **Context-Aware AI Auditing**  
  Enhance the system to factor in task context such as domain sensitivity, user intent, and complexity level to generate more precise AI usage recommendations.

- **Confidence-Based Recommendations**  
  Introduce confidence scores alongside each decision to indicate how strongly AI usage is recommended or discouraged for a given task.

- **Domain-Specific Safety Rules**  
  Implement customizable rule sets for different domains such as education, healthcare, and legal tasks to improve accuracy and responsibility in AI auditing.

- **Learning-Oriented Guidance**  
  When AI usage is discouraged, provide constructive suggestions on how users can approach the task manually, promoting learning and independent problem-solving.
  
- **User Audit History & Data Storage**  
  Enable secure storage of past AI audit results to allow users to review previous decisions, track learning progress, and reflect on responsible AI usage patterns over time.

- **Personalized AI Usage Insights**  
  Analyze historical audit data to provide users with insights into their AI usage behavior and suggest improvements towards a more  thoughtful AI adoption.


---

## Our Team

House of 115 Legends

- Aarush Jain  (Team Head)
- Vishal Singh Rajpurohit  
- Aarav Agrawal  
- Yug Mistry  

---

## Note

This project is designed to be model-agnostic and can support multiple AI providers.  
The current implementation demonstrates compatibility with Google Gemini.

---

## Working website url
https://usewithcare.netlify.app/


## Final Statement

Use AI responsibly. Not every problem needs AI.
