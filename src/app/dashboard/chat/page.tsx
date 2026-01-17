'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Send,
  Mic,
  ArrowLeft,
  Sparkles,
  Paperclip,
  Image as ImageIcon
} from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'lara';
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! 🙂 Eu sou a Lara, sua assistente pessoal. Como posso te ajudar hoje?',
      sender: 'lara',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simular resposta da Lara
    setTimeout(() => {
      const laraResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entendi! Estou processando sua mensagem. Em breve terei uma resposta completa para você. 😊',
        sender: 'lara',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, laraResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Aqui você implementaria a lógica de gravação de áudio
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-900 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/dashboard"
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">Lara</h2>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                  : 'bg-gray-900 text-white border border-gray-800'
              }`}
            >
              <p className="text-sm sm:text-base whitespace-pre-wrap break-words">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-black/60' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-900 bg-gray-950/50 backdrop-blur-sm p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Quick Actions */}
          <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
            {[
              '💰 Registrar gasto',
              '💊 Lembrete de remédio',
              '📅 Planejar dia',
              '📊 Ver relatório'
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => setInputText(action)}
                className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs sm:text-sm text-gray-300 hover:bg-gray-800 hover:border-yellow-400 transition-all whitespace-nowrap"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-end gap-2 sm:gap-3">
            <button className="p-2.5 sm:p-3 bg-gray-900 border border-gray-800 rounded-xl hover:bg-gray-800 hover:border-yellow-400 transition-all">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            
            <button className="p-2.5 sm:p-3 bg-gray-900 border border-gray-800 rounded-xl hover:bg-gray-800 hover:border-yellow-400 transition-all">
              <ImageIcon className="w-5 h-5 text-gray-400" />
            </button>

            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                rows={1}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none text-sm sm:text-base"
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>

            <button
              onClick={toggleRecording}
              className={`p-2.5 sm:p-3 rounded-xl transition-all ${
                isRecording
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                  : 'bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-yellow-400'
              }`}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'text-white' : 'text-gray-400'}`} />
            </button>

            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-2.5 sm:p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Audio Hint */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            💡 Prefiro mensagens de áudio! Fica mais natural conversar assim 🙂
          </p>
        </div>
      </div>
    </div>
  );
}
