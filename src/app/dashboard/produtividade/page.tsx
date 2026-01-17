'use client';

import { ArrowLeft, CheckCircle2, Circle, Plus, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProdutividadePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-900 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </Link>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Produtividade & Rotina</h2>
              <p className="text-xs sm:text-sm text-gray-400">Organize seu dia</p>
            </div>
          </div>
          <button className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl hover:scale-105 transition-all">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
      </header>

      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold">Tarefas de Hoje</h3>
          </div>
          <div className="space-y-3">
            {[
              { text: 'Planejar o dia com a Lara', done: true },
              { text: 'Registrar gastos do dia', done: false },
              { text: 'Tomar medicamentos', done: false }
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                {task.done ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-600" />
                )}
                <span className={task.done ? 'text-gray-500 line-through' : 'text-white'}>{task.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-12 bg-gray-950 border border-gray-800 rounded-2xl">
          <p className="text-gray-400 mb-2">Funcionalidade em desenvolvimento</p>
          <p className="text-sm text-gray-500">Em breve você terá acesso completo à gestão de rotina!</p>
        </div>
      </div>
    </div>
  );
}
