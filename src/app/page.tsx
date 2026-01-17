import { PricingCard } from '@/components/custom/pricing-card';
import { PLANS } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Lara Assistente
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            Sua parceira inteligente para organização financeira, saúde e produtividade
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Uma assistente pessoal que cuida, organiza e facilita sua vida real. 
            Integração com WhatsApp, relatórios inteligentes e acompanhamento humanizado.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-4">
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
            Já tem uma conta?
          </p>
          <a 
            href="/login"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-400 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
          >
            Fazer Login
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-gray-900 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
            Por que escolher a <span className="text-yellow-400">Lara</span>?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: '💰', title: 'Finanças Organizadas', desc: 'Controle total de ganhos e gastos com gráficos inteligentes' },
              { icon: '💊', title: 'Saúde em Dia', desc: 'Lembretes de medicamentos e controle de glicemia, pressão e colesterol' },
              { icon: '🎯', title: 'Produtividade', desc: 'Rotinas diárias, checklists e acompanhamento de metas' },
              { icon: '🤖', title: 'IA Humanizada', desc: 'Lara se adapta ao seu comportamento e se comunica de forma natural' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-5 sm:p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2024 Lara Assistente. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
