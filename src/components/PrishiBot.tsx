import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Sparkles, Calendar, Download, 
  RotateCcw, CheckCircle2, Loader2, ArrowRight
} from 'lucide-react';
import { getBotResponse, type BotResponse } from '../data/chatbotQA';
import { sendDemoRequest, type DemoSubmission } from '../services/leadService';
import { generateAndDownloadCapabilityPdf } from '../utils/generateCapabilityPdf';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionType?: 'demo' | 'contact' | 'download_pdf';
  suggestedPrompts?: string[];
  isDemoForm?: boolean;
}

interface PrishiBotProps {
  onOpenDemoModal?: () => void;
  onOpenCapabilityModal?: () => void;
}

export const PrishiBot: React.FC<PrishiBotProps> = ({ 
  onOpenDemoModal,
  onOpenCapabilityModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Inline demo form state inside chat
  const [demoForm, setDemoForm] = useState<DemoSubmission>({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    facilitySize: 'Single Plant / Industrial Site',
    pillars: ['Energy Management'],
    notes: '',
  });
  const [demoSending, setDemoSending] = useState(false);
  const [demoSent, setDemoSent] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am PrishiBot, your Resource Intelligence & Digital Transformation assistant. I can answer questions about our Energy, Water, Gas, and Chiller management platforms, IT & OT cybersecurity services, or help you schedule a live telemetry briefing. What can I help you with today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedPrompts: [
        "What services does Prishitech provide?",
        "How does Energy Management work?",
        "How do you detect water leaks?",
        "What is Chiller COP optimization?",
        "Schedule a live telemetry demo",
        "Download Capability Statement (PDF)",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const response: BotResponse = getBotResponse(textToSend);
      const isDemo = response.actionType === 'demo' || /(demo|schedule|walkthrough|book)/i.test(textToSend);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType: response.actionType,
        suggestedPrompts: response.suggestedPrompts,
        isDemoForm: isDemo,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleInlineDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoForm.name || !demoForm.workEmail || !demoForm.company) return;

    setDemoSending(true);
    try {
      await sendDemoRequest(demoForm);
      setDemoSent(true);
      
      // Append confirmation in chat
      setTimeout(() => {
        const confirmMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `🎉 Thank you, ${demoForm.name}! Your demo request for ${demoForm.company} has been dispatched to our Vaishali, Ghaziabad engineering desk. A senior solutions architect will connect with you at ${demoForm.phone || demoForm.workEmail} within 4 business hours.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestedPrompts: [
            "Download Capability Statement (PDF)",
            "What protocols do you support?",
            "Where is your office located?"
          ]
        };
        setMessages((prev) => [...prev, confirmMsg]);
        setDemoSending(false);
      }, 500);
    } catch (err) {
      console.error(err);
      setDemoSending(false);
    }
  };

  const handleResetChat = () => {
    setDemoSent(false);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Conversation restarted. How can I help you explore Prishitech's Resource Intelligence and IT solutions?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts: [
          "What services does Prishitech provide?",
          "How does Energy Management work?",
          "What is Chiller COP optimization?",
          "Schedule a live telemetry demo",
        ],
      },
    ]);
  };

  return (
    <>
      {/* FLOATING ACTION BOT BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl border border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all group"
            aria-label="Open PrishiBot AI Assistant"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600/30 text-emerald-400 border border-emerald-500/40">
              <Bot className="w-5 h-5 text-emerald-400 group-hover:rotate-6 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold leading-tight">Ask PrishiBot</div>
              <div className="text-[10px] text-emerald-400 leading-tight">Online · Platform Q&amp;A</div>
            </div>
          </button>
        </div>
      )}

      {/* CHAT WINDOW MODAL DRAWER */}
      {isOpen && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[410px] h-[580px] max-h-[88vh] bg-white border border-slate-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in text-slate-800"
          role="dialog"
          aria-label="PrishiBot Assistant Chat Window"
        >
          {/* HEADER */}
          <div className="px-4 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 select-none">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-4 h-4" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5 leading-tight">
                  <span>PrishiBot</span>
                  <span className="text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                    AI Knowledge
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  Resource Intelligence &amp; IT Advisor
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart Chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Restart chat conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TELEMETRY ADVISORY SUBHEADER */}
          <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>TRIAXIS Verified Knowledge Base (v2026.9)</span>
            </span>
            <button
              onClick={() => {
                if (onOpenCapabilityModal) {
                  onOpenCapabilityModal();
                } else {
                  generateAndDownloadCapabilityPdf();
                }
              }}
              className="text-emerald-700 hover:text-emerald-800 font-semibold hover:underline flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>Get PDF</span>
            </button>
          </div>

          {/* MESSAGES SCROLL AREA */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-slate-900 text-white rounded-br-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* INLINE DEMO BOOKING FORM IF USER WANTS A DEMO */}
                {msg.isDemoForm && !demoSent && (
                  <div className="w-full mt-2 bg-white p-3.5 rounded-2xl border border-emerald-200 shadow-sm text-left animate-fade-in space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Direct Demo Dispatch to Engineering</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Fill out your details below. I will send your demo request directly to our solutions desk in Vaishali, Ghaziabad.
                    </p>

                    <form onSubmit={handleInlineDemoSubmit} className="space-y-2 text-xs">
                      <div>
                        <input
                          required
                          type="text"
                          placeholder="Your Name *"
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          required
                          type="email"
                          placeholder="Work Email *"
                          value={demoForm.workEmail}
                          onChange={(e) => setDemoForm({ ...demoForm, workEmail: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800"
                        />
                        <input
                          required
                          type="tel"
                          placeholder="Phone / WhatsApp *"
                          value={demoForm.phone}
                          onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800"
                        />
                      </div>
                      <div>
                        <input
                          required
                          type="text"
                          placeholder="Company / Facility Name *"
                          value={demoForm.company}
                          onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-800"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={demoSending}
                        className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-50"
                      >
                        {demoSending ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Dispatching Demo to Engineering...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Send Demo Request</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      {onOpenDemoModal && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsOpen(false);
                            onOpenDemoModal();
                          }}
                          className="text-[11px] text-slate-500 hover:text-slate-800 underline text-center block w-full pt-1"
                        >
                          Or open full walkthrough modal
                        </button>
                      )}
                    </form>
                  </div>
                )}

                {/* ACTION BUTTONS IF ATTACHED */}
                {msg.actionType === 'download_pdf' && (
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => generateAndDownloadCapabilityPdf()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Capability Statement (PDF)</span>
                    </button>
                  </div>
                )}

                {msg.actionType === 'contact' && (
                  <div className="mt-2 flex gap-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>Visit Contact Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* SUGGESTED PROMPT CHIPS */}
                {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.suggestedPrompts.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(prompt)}
                        className="text-[11px] bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full transition-colors text-left shadow-2xs"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 bg-white border border-slate-200 px-3 py-2 rounded-2xl w-fit rounded-bl-xs text-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                <span>PrishiBot is reviewing knowledge base...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FORM BAR */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Energy, Water, Chiller, Cloud, OT..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white rounded-xl transition-all shadow-xs shrink-0"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
