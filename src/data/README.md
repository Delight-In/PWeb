# PrishiBot Knowledge Base Guide (`data/`)

You can easily add, update, or remove questions answered by **PrishiBot** by editing `src/data/faqKnowledge.json` (and `public/data/faqKnowledge.json`).

### Structure of each Q&A Item:
```json
{
  "id": "unique-id-tag",
  "category": "Resource Intelligence",
  "question": "What is the question asked by the user?",
  "keywords": ["key1", "key2", "synonym", "related word"],
  "answer": "The detailed answer PrishiBot will provide to the user.",
  "actionType": "demo" // Optional: "demo", "contact", "download_pdf", or null
}
```

### Action Types supported:
- `"demo"`: Displays an interactive **"Schedule Live Demo"** button below the answer.
- `"contact"`: Displays a **"Contact Engineering Hub"** button.
- `"download_pdf"`: Displays a **"Download Capability PDF"** button.
