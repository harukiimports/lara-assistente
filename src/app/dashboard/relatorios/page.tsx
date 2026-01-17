'use client';

import { ArrowLeft, BarChart3, TrendingUp, Download, Mail } from 'lucide-react';
import Link from 'next/link';

export default function RelatoriosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-900 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </Link>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Relatórios & Dashboard</h2>
              <p className="text-xs sm:text-sm text-gray-400">Visualize seu progresso</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Resumo Financeiro
            </h3>
            <div className="h-48 flex items-center justify-center bg-gray-900 rounded-xl">
              <p className="text-gray-500 text-sm">Gráfico em desenvolvimento</p>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              Produtividade
            </h3>
            <div className="h-48 flex items-center justify-center bg-gray-900 rounded-xl">
              <p className="text-gray-500 text-sm">Gráfico em desenvolvimento</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <Download className="w-5 h-5 text-yellow-400" />
              <div className="text-left">
                <p className="font-semibold text-white text-sm">Baixar Relatório</p>
                <p className="text-xs text-gray-400">PDF completo</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <div className="text-left">
                <p className="font-semibold text-white text-sm">Enviar por E-mail</p>
                <p className="text-xs text-gray-400">Receba semanalmente</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
