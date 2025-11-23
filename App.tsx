import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, LoadingState } from './types';
import { sendMessageToGemini } from './services/geminiService';
import { ChatBubble } from './components/ChatBubble';
import { Content, Part } from '@google/genai';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm MobileGenie. I can help you find the perfect phone within your budget. Try asking: \"Best camera phone under ₹30k?\" or \"Compare Pixel 8a vs OnePlus 12R\".",
    }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingState]);

  const handleSend = async () => {
    if (!input.trim() || loadingState !== LoadingState.IDLE) return;

    const userText = input.trim();
    setInput('');
    setLoadingState(LoadingState.THINKING);

    // Add user message to UI
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
    };
    setMessages(prev => [...prev, newUserMsg]);

    try {
      // Transform UI messages to API Content format
      // Explicitly type as Content[] and ensure parts match Part[]
      const apiHistory: Content[] = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }] as Part[]
      }));

      const { text, toolResult } = await sendMessageToGemini(apiHistory, userText);

      const newAiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: text,
        relatedData: toolResult
      };

      setMessages(prev => [...prev, newAiMsg]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Sorry, something went wrong. Please try again.",
        isError: true
      }]);
    } finally {
      setLoadingState(LoadingState.IDLE);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // API Key Check Mock
  const hasApiKey = !!process.env.API_KEY;

  if (!hasApiKey) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
                  <h1 className="text-2xl font-bold text-slate-800 mb-4">Configuration Required</h1>
                  <p className="text-slate-600 mb-4">
                      Please provide a valid <code className="bg-slate-100 px-2 py-1 rounded text-indigo-600">process.env.API_KEY</code> to run this application.
                  </p>
                  <p className="text-xs text-slate-400">
                      (In a real deployment, this would be an environment variable on the server).
                  </p>
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col h-screen bg-slate-50 max-w-4xl mx-auto shadow-2xl border-x border-slate-200 relative">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
            M
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg">MobileGenie</h1>
            <p className="text-xs text-slate-500">AI Shopping Assistant</p>
          </div>
        </div>
        <div className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 font-medium">
          Online
        </div>
      </header>

      {/* Chat Area */}
      <main 
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto p-4 md:p-6 scroll-smooth"
      >
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {loadingState === LoadingState.THINKING && (
          <div className="flex justify-start mb-6">
             <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
             </div>
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200 sticky bottom-0 z-20">
        <div className="relative flex items-end gap-2 max-w-4xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about phones, comparisons, or specs..."
            className="w-full bg-slate-100 text-slate-800 border-0 rounded-xl px-4 py-3 pr-12 resize-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all max-h-32 min-h-[50px]"
            rows={1}
            disabled={loadingState !== LoadingState.IDLE}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loadingState !== LoadingState.IDLE}
            className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
        <div className="text-center mt-2">
            <p className="text-[10px] text-slate-400">
                AI can make mistakes. Please double-check product specs.
            </p>
        </div>
      </div>
    </div>
  );
};

export default App;