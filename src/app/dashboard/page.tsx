'use client';

import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Wallet, 
  Target, 
  Heart, 
  BarChart3, 
  Newspaper,
  Settings,
  Menu,
  X,
  Sparkles,
  LogOut,
  Crown
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar se é admin via URL
    const params = new URLSearchParams(window.location.search);
    setIsAdmin(params.get('admin') === 'true');
  }, []);

  const menuItems = [
    { icon: MessageCircle, label: 'Lara (Chat)', href: '/dashboard/chat', color: 'text-yellow-400' },
    { icon: Wallet, label: 'Finanças', href: '/dashboard/financas', color: 'text-green-400' },
    { icon: Target, label: 'Produtividade & Rotina', href: '/dashboard/produtividade', color: 'text-blue-400' },
    { icon: Heart, label: 'Saúde & Medicamentos', href: '/dashboard/saude', color: 'text-red-400' },
    { icon: BarChart3, label: 'Relatórios & Dashboard', href: '/dashboard/relatorios', color: 'text-purple-400' },
    { icon: Newspaper, label: 'Últimas Notícias', href: '/dashboard/noticias', color: 'text-cyan-400' },
  ];

  if (isAdmin) {
    menuItems.push({
      icon: Settings,
      label: 'Integrações (Admin)',
      href: '/dashboard/admin',
      color: 'text-orange-400'
    });
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 border border-gray-800 rounded-xl text-yellow-400 hover:bg-gray-800 transition-colors"
      >
        {sidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-gray-950 border-r border-gray-900 z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 sm:p-6 border-b border-gray-900">
            <Link href="/dashboard" className="flex items-center gap-2 sm:gap-3 group">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:rotate-12 transition-transform" />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Lara
                </h1>
                <p className="text-xs text-gray-500">Assistente Pessoal</p>
              </div>
            </Link>
          </div>

          {/* User Info */}
          <div className="p-4 sm:p-6 border-b border-gray-900">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-base sm:text-lg">
                U
              </div>
              <div>
                <p className="font-semibold text-white text-sm sm:text-base">Usuário</p>
                <p className="text-xs text-gray-400">Plano Prata ⭐</p>
              </div>
            </div>
            {isAdmin && (
              <div className="mt-3 px-2.5 sm:px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center gap-2">
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs text-orange-400 font-semibold">Modo Administrador</span>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
            <ul className="space-y-1.5 sm:space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 group"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-3 sm:p-4 border-t border-gray-900">
            <Link
              href="/login"
              className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all duration-300 group"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base">Sair</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* Header */}
        <header className="border-b border-gray-900 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Bem-vindo de volta! 👋</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Vamos organizar seu dia?</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 border border-gray-800 rounded-xl">
                <p className="text-xs text-gray-500">Hoje</p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {new Date().toLocaleDateString('pt-BR', { 
                    day: '2-digit', 
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { 
                icon: MessageCircle, 
                title: 'Conversar com Lara', 
                desc: 'Tire dúvidas ou registre informações',
                color: 'from-yellow-400 to-yellow-600',
                href: '/dashboard/chat'
              },
              { 
                icon: Wallet, 
                title: 'Registrar Gasto', 
                desc: 'Adicione uma despesa rapidamente',
                color: 'from-green-400 to-green-600',
                href: '/dashboard/financas'
              },
              { 
                icon: Heart, 
                title: 'Medicamentos', 
                desc: 'Veja seus lembretes de hoje',
                color: 'from-red-400 to-red-600',
                href: '/dashboard/saude'
              },
            ].map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group relative overflow-hidden"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${action.color} rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300`}></div>
                <div className="relative bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-gray-900 transition-all duration-300">
                  <action.icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 bg-gradient-to-r ${action.color} bg-clip-text text-transparent`} />
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{action.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{action.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            {[
              { label: 'Gastos do Mês', value: 'R$ 0,00', color: 'text-green-400', icon: Wallet },
              { label: 'Tarefas Concluídas', value: '0/0', color: 'text-blue-400', icon: Target },
              { label: 'Medicamentos Hoje', value: '0', color: 'text-red-400', icon: Heart },
              { label: 'Dias de Sequência', value: '0', color: 'text-purple-400', icon: BarChart3 },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                  <span className={`text-lg sm:text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Olá! Eu sou a Lara 🙂
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6">
              Estou aqui para te ajudar a organizar suas finanças, cuidar da sua saúde e aumentar sua produtividade. 
              Vamos começar explorando o menu ao lado!
            </p>
            <Link
              href="/dashboard/chat"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Conversar com Lara
            </Link>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
