import { Plan } from '@/lib/types';

export const PLANS: Plan[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 24.90,
    borderColor: 'from-amber-700 to-amber-900',
    features: [
      '💰 Organização financeira básica',
      '💬 Registro rápido via WhatsApp',
      '⏰ Lembretes simples',
      '📅 Acompanhamento leve da rotina',
      '📊 Relatórios resumidos'
    ]
  },
  {
    id: 'prata',
    name: 'Prata',
    price: 39.90,
    popular: true,
    borderColor: 'from-gray-300 to-gray-500',
    features: [
      // Tudo do Bronze
      '💰 Organização financeira básica',
      '💬 Registro rápido via WhatsApp',
      '⏰ Lembretes simples',
      '📅 Acompanhamento leve da rotina',
      '📊 Relatórios resumidos',
      // Exclusivos do Prata
      '🩺 Controle completo de saúde',
      '💊 Gestão de medicamentos com respostas rápidas',
      '🎯 Metas e objetivos personalizados com acompanhamento',
      '📈 Relatórios detalhados de rotina e disciplina',
      '📊 Dashboards visuais mais completos'
    ],
    description: 'Ideal para quem quer organização + cuidado diário'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 59.90,
    borderColor: 'from-yellow-400 to-yellow-600',
    features: [
      // Tudo do Bronze
      '💰 Organização financeira básica',
      '💬 Registro rápido via WhatsApp',
      '⏰ Lembretes simples',
      '📅 Acompanhamento leve da rotina',
      '📊 Relatórios resumidos',
      // Tudo do Prata
      '🩺 Controle completo de saúde',
      '💊 Gestão de medicamentos com respostas rápidas',
      '🎯 Metas e objetivos personalizados com acompanhamento',
      '📈 Relatórios detalhados de rotina e disciplina',
      '📊 Dashboards visuais mais completos',
      // Exclusivos do Gold
      '📸 Análise de alimentos por foto (diferencial premium)',
      '🍽️ Estimativas inteligentes de calorias e glicemia',
      '🧠 IA mais proativa no foco diário',
      '📊 Dashboards avançados e comparativos',
      '🚀 Prioridade em novos recursos'
    ],
    description: 'Para quem quer controle total + tecnologia avançada'
  }
];
