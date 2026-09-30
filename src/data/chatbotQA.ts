import faqData from './faqKnowledge.json';

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  keywords: string[];
  answer: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
}

export const faqList: FAQItem[] = faqData as FAQItem[];

export interface BotResponse {
  answer: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
  matchedQuestion?: string;
  suggestedPrompts?: string[];
}

/**
 * Searches the Q&A knowledge base for the best matching response
 */
export function getBotResponse(rawQuery: string): BotResponse {
  const query = rawQuery.toLowerCase().trim();

  // 1. Greetings
  if (/^(hi|hello|hey|namaste|good morning|good evening|good afternoon|greetings)\b/i.test(query)) {
    return {
      answer: "Hello! I am PrishiBot, your Resource Intelligence & Digital Transformation assistant. I can answer questions about our Energy, Water, Gas, and Chiller management platforms, IT & OT cybersecurity services, or help you schedule a live telemetry briefing. What can I help you with today?",
      suggestedPrompts: [
        "What services does Prishitech provide?",
        "How does Energy Management work?",
        "Schedule a live telemetry demo",
        "Download Capability Statement (PDF)"
      ]
    };
  }

  // 2. Appreciation & Thanks
  if (/^(thanks|thank you|great|awesome|perfect|helpful|ok|okay)\b/i.test(query)) {
    return {
      answer: "You're very welcome! If you'd like to explore how these solutions apply to your facility, feel free to schedule a live demo or ask about our TRIAXIS engineering audit bench.",
      actionType: 'demo',
      suggestedPrompts: [
        "Schedule a live telemetry demo",
        "Where is your office located?"
      ]
    };
  }

  // 3. Demo / Consultation intent
  if (/(demo|schedule|walkthrough|trial|meeting|book|call|talk to an expert)/i.test(query) && !/(what is|explain)/i.test(query)) {
    return {
      answer: "I'd be glad to schedule a live telemetry demonstration for your facility! You can fill out the quick reservation form below, and I will dispatch your request directly to our solutions engineering bench.",
      actionType: 'demo'
    };
  }

  // 4. Score matching across the Q&A database
  let bestItem: FAQItem | null = null;
  let highestScore = 0;

  for (const item of faqList) {
    let score = 0;

    // Check exact question title match
    const qLower = item.question.toLowerCase();
    if (query.includes(qLower) || qLower.includes(query)) {
      score += 10;
    }

    // Check keywords
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (query.includes(kwLower)) {
        score += 3;
      }
    }

    // Check answer text words
    const words = query.split(/\s+/).filter(w => w.length > 3);
    for (const word of words) {
      if (item.answer.toLowerCase().includes(word)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestItem = item;
    }
  }

  // If a high-confidence match is found
  if (bestItem && highestScore >= 3) {
    return {
      answer: bestItem.answer,
      actionType: bestItem.actionType,
      matchedQuestion: bestItem.question,
      suggestedPrompts: [
        "Schedule a live telemetry demo",
        "Download Capability Statement (PDF)",
        "Where is your office located?"
      ]
    };
  }

  // Fallback if no specific question matched
  return {
    answer: "I specialize in Prishitech's Resource Intelligence (Energy, Water, Gas, Chiller, BEE Energy Advisory) and IT Services (IoT, Hybrid Cloud, IEC 62443 OT Cybersecurity, AI). Would you like to review one of these pillars, download our technical capability prospectus, or connect with our engineering architects?",
    actionType: 'contact',
    suggestedPrompts: [
      "What is Energy Management?",
      "How does Water Leak Detection work?",
      "What is the TRIAXIS Consortium?",
      "Schedule a live demo"
    ]
  };
}
