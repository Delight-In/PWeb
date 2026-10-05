import faqData from './faqKnowledge.json';

export interface CompanyInfo {
  name: string;
  tagline: string;
  positioning: string;
  business_type: string;
  focus: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  keywords: string[];
  answer: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
}

export interface ChatbotDataPayload {
  company: CompanyInfo;
  faq: FAQItem[];
}

const rawData: any = faqData;

export const companyInfo: CompanyInfo = rawData.company || {
  name: "PrishiTech Solutions",
  tagline: "Complex Made Easy",
  positioning: "Enabling operations through IT innovations",
  business_type: "B2B technology consulting and implementation",
  focus: [
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
};

// Supplemental platform questions (office location, capability download, demo booking, protocols)
const supplementalFaqs: FAQItem[] = [
  {
    id: "office-location",
    category: "Company Info",
    question: "Where is your office located?",
    keywords: ["address", "location", "office", "headquarters", "where", "ghaziabad", "vaishali", "cloud 9", "phone", "contact address", "street address"],
    answer: "Our headquarters and engineering hub is located at: 5A 45/46, Cloud-9, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201019, India. Switchboard: +91 120 456 7890 | WhatsApp: +91 98100 12345 | Email: contact@prishitech.com.",
    actionType: "contact"
  },
  {
    id: "capability-statement",
    category: "Documentation",
    question: "How can I download the Capability Statement PDF?",
    keywords: ["pdf", "capability", "prospectus", "document", "brochure", "download", "whitepaper"],
    answer: "You can download our complete Enterprise Capability Statement PDF directly right here. It details our architectural framework, smart operations stack, and implementation methodology.",
    actionType: "download_pdf"
  },
  {
    id: "supported-protocols",
    category: "Technical",
    question: "Which industrial hardware and protocols do you support?",
    keywords: ["protocols", "hardware", "modbus", "bacnet", "mqtt", "lorawan", "opc", "opc-ua", "sensors", "meters"],
    answer: "We support industry-standard protocols including Modbus RTU/TCP, BACnet, MQTT, LoRaWAN, OPC-UA, and analog telemetry inputs. Edge buffering ensures zero telemetry loss during network dropouts."
  },
  {
    id: "triaxis-consortium",
    category: "Consortium",
    question: "What is the TRIAXIS Consortium?",
    keywords: ["triaxis", "consortium", "partner", "partnership", "engineering bench", "turnkey"],
    answer: "The TRIAXIS Consortium combines PrishiTech's software and digital transformation capabilities with certified electrical engineers and HVAC specialists to provide single-SLA accountability for operational upgrades.",
    actionType: "contact"
  },
  {
    id: "book-demo-action",
    category: "Actions",
    question: "How do I schedule a live demo?",
    keywords: ["demo", "walkthrough", "schedule", "book", "meeting", "presentation", "trial", "pilot", "create demo", "request demo"],
    answer: "I can arrange a live demonstration for your team right now! Please enter your details in the form below, and our engineering desk in Vaishali, Ghaziabad will coordinate the walkthrough.",
    actionType: "demo"
  }
];

const baseFaqList: FAQItem[] = Array.isArray(rawData) ? rawData : (rawData.faq || []);

// Combine base FAQs with supplemental items, ensuring uniqueness by ID
const faqMap = new Map<string, FAQItem>();
for (const item of baseFaqList) {
  faqMap.set(item.id, item);
}
for (const item of supplementalFaqs) {
  if (!faqMap.has(item.id)) {
    faqMap.set(item.id, item);
  }
}

export const faqList: FAQItem[] = Array.from(faqMap.values());

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
      answer: `Hello! I am PrishiBot, your assistant for ${companyInfo.name} — "${companyInfo.tagline}". I can answer questions about our digital transformation solutions, Industrial IoT, smart operations (Smart Alarm, Smart Energy, PTechView, Smart Weight, Smart Counter), data analytics, and SAP advisory. What would you like to explore today?`,
      suggestedPrompts: [
        "What does PrishiTech Solutions do?",
        "What is 'Complex Made Easy'?",
        "What is Smart Alarm?",
        "What is PTechView?",
        "What SAP services do you offer?",
        "Schedule a live demo"
      ]
    };
  }

  // 2. Appreciation & Thanks
  if (/^(thanks|thank you|great|awesome|perfect|helpful|ok|okay|got it)\b/i.test(query)) {
    return {
      answer: "You're very welcome! If you'd like to explore how these solutions apply to your business, feel free to ask more questions or schedule a live demonstration whenever you're ready.",
      suggestedPrompts: [
        "Schedule a live demo",
        "What is PTechView?",
        "Where is your office located?"
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
      matchedQuestion: "How do I schedule a live demo?",
      suggestedPrompts: [
        "Download Capability Statement (PDF)",
        "What is Smart Energy?",
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
    if (query === qLower) {
      score += 20;
    } else if (query.includes(qLower) || qLower.includes(query)) {
      score += 10;
    }

    // Check keywords
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (query === kwLower) {
        score += 8;
      } else if (query.includes(kwLower)) {
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
    // If the matched item has actionType, use it, or assign appropriate action for certain questions
    let actionType = bestItem.actionType;
    if (!actionType && (bestItem.id === 'PT060' || bestItem.id === 'PT050')) {
      actionType = 'contact';
    }

    return {
      answer: bestItem.answer,
      actionType: actionType,
      matchedQuestion: bestItem.question,
      suggestedPrompts: [
        "Schedule a live demo",
        "Download Capability Statement (PDF)",
        "What is Smart Alarm?"
      ]
    };
  }

  // 5. Fallback if no specific question matched
  return {
    answer: "I specialize in PrishiTech Solutions' IT innovations — including Digital Transformation, Industrial IoT, Smart Operations (Smart Alarm, Smart Energy, PTechView, Smart Weight, Smart Counter), Data Analytics, Automation, and SAP Advisory. Would you like to learn more about our solutions, explore a specific category, or connect with our engineering team?",
    actionType: 'contact',
    suggestedPrompts: [
      "What does PrishiTech Solutions do?",
      "What is Smart Energy?",
      "What is PTechView?",
      "Does PrishiTech provide SAP services?"
    ]
  };
}
