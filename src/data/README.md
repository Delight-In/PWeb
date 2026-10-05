# PrishiBot Knowledge Base Guide (`data/`)

You can easily add, update, or remove questions answered by **PrishiBot** by editing `src/data/faqKnowledge.json` (and `public/data/faqKnowledge.json`, `src/data/chatbotData.json`).

### Structure of the Knowledge Base JSON:
```json
{
  "company": {
    "name": "PrishiTech Solutions",
    "tagline": "Complex Made Easy",
    "positioning": "Enabling operations through IT innovations",
    "business_type": "B2B technology consulting and implementation",
    "focus": [
      "Digital Transformation",
      "Industrial IoT",
      "Smart Operations",
      "Data Analytics",
      "Automation",
      "Connected Operations",
      "Enterprise Technology",
      "SAP Advisory",
      "Information Management"
    ]
  },
  "faq": [
    {
      "id": "PT001",
      "category": "Company",
      "question": "What is PrishiTech Solutions?",
      "keywords": ["PrishiTech", "company", "IT consulting", "technology", "digital transformation"],
      "answer": "PrishiTech Solutions is a B2B technology and IT consulting company...",
      "actionType": "demo" // Optional: "demo", "contact", "download_pdf"
    }
  ]
}
```

### Action Types supported:
- `"demo"`: Displays an interactive **"Schedule Live Demo"** button and inline booking form.
- `"contact"`: Displays a **"Contact Engineering Hub"** button.
- `"download_pdf"`: Displays a **"Download Capability PDF"** button.
