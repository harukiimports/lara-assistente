'use client';

import { Plan } from '@/lib/types';

interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="relative group">
      {/* Borda retroiluminada */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.borderColor} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
      
      {/* Card */}
      <div className="relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
        {/* Badge Popular */}
        {plan.popular && (
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
              ⭐ MAIS POPULAR
            </span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {plan.name === 'Gold' && '👑 '}
            {plan.name}
            {plan.name === 'Gold' && ' EXCLUSIVO'}
          </h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-gray-400 text-base sm:text-lg">R$</span>
            <span className="text-4xl sm:text-5xl font-bold text-white">
              {plan.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-gray-400 text-sm sm:text-base">/mês</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              {/* Check estilo WhatsApp */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  {/* Caixinha verde */}
                  <div className="absolute inset-0 bg-green-500 rounded-sm"></div>
                  {/* Dois checks brancos */}
                  <svg 
                    viewBox="0 0 20 20" 
                    className="absolute inset-0 w-full h-full text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    {/* Primeiro check (atrás) */}
                    <path 
                      d="M3 10 L7 14 L15 6" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                    {/* Segundo check (frente) */}
                    <path 
                      d="M5 10 L9 14 L17 6" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Description */}
        {plan.description && (
          <p className="text-gray-400 text-xs sm:text-sm italic mb-5 sm:mb-6 text-center">
            👉 {plan.description}
          </p>
        )}

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 text-sm sm:text-base">
          Começar Agora
        </button>
      </div>
    </div>
  );
}
