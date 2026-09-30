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
      answer: "Hello! I am PrishiBot, your Resource Intelligence & Digital Transformation assistant. I can answer questions about our Energy, Water, Gas, and Chiller management platforms, IT & OT cybersecurity services, or help you connect with our engineering desk. What can I help you explore today?",
      suggestedPrompts: [
        "What services does Prishitech provide?",
        "How does Energy Management work?",
        "Schedule a live telemetry demo",
        "Download Capability Statement (PDF)"
      ]
    };
  }

  // 2. Appreciation & Thanks (strictly informational, no unsolicited forms)
  if (/^(thanks|thank you|great|awesome|perfect|helpful|ok|okay|got it)\b/i.test(query)) {
    return {
      answer: "You're very welcome! If you'd like to explore how these solutions apply to your facility, feel free to ask more questions or schedule a live telemetry demonstration whenever you're ready.",
      suggestedPrompts: [
        "Schedule a live telemetry demo",
        "Where is your office located?",
        "What protocols do you support?"
      ]
    };
  }

  // 3. User specifically asks to create/book a demo OR shows interest in services to contact us
  const isQuestionOrInquiry = /^(what|tell me|explain|describe|which|list|how does|why|where is)\b/i.test(query);

  const isDemoRequest = 
    /(create|book|schedule|request|want|need|get|take|arrange|setup|set up|give|show|conduct)\s+(a\s+)?(live\s+)?(telemetry\s+)?demo/i.test(query) ||
    /^(demo|live demo|telemetry demo|book demo|schedule demo|create demo|request demo|get demo|take demo)$/i.test(query) ||
    /(how to|can i|i want to|where can i)\s+(book|schedule|request|get|have)\s+(a\s+)?demo/i.test(query);

  const isServiceInterestOrContact =
    /(interested in (your |these )?services|interested in (a |the )?demo|interested in partnering|show interest|want to connect|reach out to you|call me|contact us|contact you|contact sales|contact engineering|get in touch|speak with (someone|an engineer|an expert)|talk to (an expert|engineering)|partner with you)/i.test(query);

  if (!isQuestionOrInquiry && (isDemoRequest || isServiceInterestOrContact)) {
    return {
      answer: "We would be delighted to coordinate with your team! Please enter your details below. I will dispatch your request directly to our solutions desk in Vaishali, Ghaziabad so a senior engineer can connect with you.",
      actionType: 'demo',
      matchedQuestion: "How do I schedule a live telemetry demo?",
      suggestedPrompts: [
        "Download Capability Statement (PDF)",
        "What protocols do you support?",
        "Where is your office located?"
      ]
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

  // 5. Fallback if no specific question matched
  return {
    answer: "I specialize in Prishitech's Resource Intelligence (Energy, Water, Gas, Chiller, BEE Energy Advisory) and IT Services (IoT, Hybrid Cloud, IEC 62443 OT Cybersecurity, AI). Would you like to review one of these pillars, download our technical capability prospectus, or connect with our engineering architects?",
    actionType: 'contact',
    suggestedPrompts: [
      "What is Energy Management?",
      "How does Water Leak Detection work?",
      "What is the TRIAXIS Consortium?",
      "Schedule a live telemetry demo"
    ]
  };
}
