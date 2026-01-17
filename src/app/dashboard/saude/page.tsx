'use client';

import { ArrowLeft, Pill, Clock, Bell, Heart, Activity, Droplet } from 'lucide-react';
import Link from 'next/link';

export default function SaudePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-900 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </Link>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Saúde & Medicamentos</h2>
              <p className="text-xs sm:text-sm text-gray-400">Cuide da sua saúde</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Activity, label: 'Pressão', value: '120/80', color: 'text-green-400' },
            { icon: Droplet, label: 'Glicemia', value: '95 mg/dL', color: 'text-blue-400' },
            { icon: Heart, label: 'Colesterol', value: '180 mg/dL', color: 'text-red-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-950 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Pill className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-bold">Medicamentos de Hoje</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Medicamento A', time: '08:00', taken: true },
              { name: 'Medicamento B', time: '14:00', taken: false },
              { name: 'Medicamento C', time: '20:00', taken: false }
            ].map((med, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold text-white text-sm">{med.name}</p>
                    <p className="text-xs text-gray-400">{med.time}</p>
                  </div>
                </div>
                {med.taken ? (
                  <span className="text-xs px-3 py-1 bg-green-400/10 text-green-400 rounded-lg border border-green-400/30">
                    ✓ Tomado
                  </span>
                ) : (
                  <button className="text-xs px-3 py-1 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                    Marcar
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-12 bg-gray-950 border border-gray-800 rounded-2xl">
          <Bell className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">Configure seus lembretes</p>
          <p className="text-sm text-gray-500">Em breve você poderá adicionar medicamentos e horários!</p>
        </div>
      </div>
    </div>
  );
}
