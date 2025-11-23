import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';
import { PhoneCard } from './PhoneCard';
import { ComparisonView } from './ComparisonView';

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6 animate-fade-in`}>
      <div className={`flex flex-col max-w-[90%] md:max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        
        {/* Avatar / Name */}
        <span className={`text-xs mb-1 text-slate-400 ${isUser ? 'mr-1' : 'ml-1'}`}>
          {isUser ? 'You' : 'MobileGenie'}
        </span>

        {/* Text Content */}
        <div className={`
            px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
            ${isUser 
              ? 'bg-indigo-600 text-white rounded-tr-none' 
              : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'}
        `}>
          {message.isError ? (
             <span className="text-red-200">{message.text}</span>
          ) : (
             <div className="markdown-content">
                 <ReactMarkdown
                    components={{
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                        strong: ({node, ...props}) => <span className="font-bold" {...props} />,
                    }}
                 >
                    {message.text}
                 </ReactMarkdown>
             </div>
          )}
        </div>

        {/* Rich Content Attachments */}
        {!isUser && message.relatedData && (
            <div className="mt-3 w-full overflow-x-auto">
                {message.relatedData.type === 'product-list' && (
                    <div className="flex gap-4 py-2 px-1 overflow-x-auto snap-x">
                        {message.relatedData.data.map(phone => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                )}
                {message.relatedData.type === 'comparison' && (
                    <ComparisonView phones={message.relatedData.data} />
                )}
            </div>
        )}
      </div>
    </div>
  );
};
