'use client';

import { useState } from 'react';
import { 
  Settings,
  MessageSquare,
  Brain,
  Calendar,
  Newspaper,
  Database,
  CreditCard,
  Mail,
  Check,
  X,
  AlertCircle,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

interface Integration {
  id: string;
  name: string;
  icon: any;
  description: string;
  apiKey: string;
  status: 'connected' | 'disconnected' | 'error';
  placeholder: string;
}

export default function AdminPage() {
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'whatsapp',
      name: 'WhatsApp API',
      icon: MessageSquare,
      description: 'Integração com WhatsApp Business',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key do WhatsApp'
    },
    {
      id: 'openai',
      name: 'OpenAI / ChatGPT',
      icon: Brain,
      description: 'IA para conversas e análises',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key da OpenAI'
    },
    {
      id: 'google',
      name: 'Google Services',
      icon: Calendar,
      description: 'Maps, Agenda, Gmail',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key do Google'
    },
    {
      id: 'news',
      name: 'API de Notícias',
      icon: Newspaper,
      description: 'Economia e saúde',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key de notícias'
    },
    {
      id: 'supabase',
      name: 'Supabase',
      icon: Database,
      description: 'Banco de dados',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key do Supabase'
    },
    {
      id: 'payment',
      name: 'Gateway de Pagamento',
      icon: CreditCard,
      description: 'Processamento de pagamentos',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole sua API Key do gateway'
    },
    {
      id: 'smtp',
      name: 'SMTP (E-mail)',
      icon: Mail,
      description: 'Envio de e-mails',
      apiKey: '',
      status: 'disconnected',
      placeholder: 'Cole suas credenciais SMTP'
    }
  ]);

  const handleApiKeyChange = (id: string, value: string) => {
    setIntegrations(prev =>
      prev.map(integration =>
        integration.id === id
          ? { ...integration, apiKey: value }
          : integration
      )
    );
  };

  const handleConnect = (id: string) => {
    setIntegrations(prev =>
      prev.map(integration =>
        integration.id === id
          ? { 
              ...integration, 
              status: integration.apiKey ? 'connected' : 'error' 
            }
          : integration
      )
    );
  };

  const handleDisconnect = (id: string) => {
    setIntegrations(prev =>
      prev.map(integration =>
        integration.id === id
          ? { ...integration, status: 'disconnected', apiKey: '' }
          : integration
      )
    );
  };

  const toggleShowKey = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'error':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <Check className="w-4 h-4" />;
      case 'error':
        return <X className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected':
        return 'Conectado';
      case 'error':
        return 'Erro';
      default:
        return 'Desconectado';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-yellow-400 transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Voltar ao Dashboard
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          <div className="p-2 sm:p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Integrações (Admin)
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Configure as APIs e integrações do sistema
            </p>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-gray-700 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 rounded-lg">
                  <integration.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {integration.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {integration.description}
                  </p>
                </div>
              </div>
              
              {/* Status Badge */}
              <div
                className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-xs sm:text-sm font-semibold ${getStatusColor(
                  integration.status
                )}`}
              >
                {getStatusIcon(integration.status)}
                <span className="hidden sm:inline">{getStatusText(integration.status)}</span>
              </div>
            </div>

            {/* API Key Input */}
            <div className="mb-4">
              <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">
                API Key / Credenciais
              </label>
              <div className="relative">
                <input
                  type={showKeys[integration.id] ? 'text' : 'password'}
                  value={integration.apiKey}
                  onChange={(e) => handleApiKeyChange(integration.id, e.target.value)}
                  placeholder={integration.placeholder}
                  disabled={integration.status === 'connected'}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base pr-10"
                />
                <button
                  onClick={() => toggleShowKey(integration.id)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showKeys[integration.id] ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:gap-3">
              {integration.status === 'connected' ? (
                <button
                  onClick={() => handleDisconnect(integration.id)}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  Desconectar
                </button>
              ) : (
                <button
                  onClick={() => handleConnect(integration.id)}
                  disabled={!integration.apiKey}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black rounded-lg transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 text-sm sm:text-base"
                >
                  Conectar
                </button>
              )}
              <button
                onClick={() => handleApiKeyChange(integration.id, '')}
                className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900 border border-gray-800 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Limpar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-blue-400 mb-1 sm:mb-2">
              Informações Importantes
            </h4>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-2">
              <li>• As chaves API são armazenadas de forma segura e criptografada</li>
              <li>• Você pode desconectar e reconectar integrações a qualquer momento</li>
              <li>• Algumas funcionalidades do app dependem dessas integrações</li>
              <li>• Mantenha suas credenciais em segredo e não compartilhe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
