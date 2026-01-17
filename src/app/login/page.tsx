'use client';

import { useState } from 'react';
import { Sparkles, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar se é admin
    if (email === 'admin' && password === 'admin') {
      // Redirecionar para dashboard admin
      window.location.href = '/dashboard?admin=true';
    } else {
      // Login normal - redirecionar para dashboard
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 hover:opacity-80 transition-opacity">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Lara Assistente
            </h1>
          </Link>
          <p className="text-sm sm:text-base text-gray-400">Entre na sua conta</p>
        </div>

        {/* Login Card */}
        <div className="relative group">
          {/* Borda retroiluminada */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          
          {/* Card */}
          <div className="relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  E-mail ou Login
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="seu@email.com ou admin"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-10 sm:pl-11 pr-11 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-xs sm:text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                  Esqueceu a senha?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 text-sm sm:text-base"
              >
                Entrar
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-5 sm:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-black text-gray-500">ou</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Não tem uma conta?{' '}
                <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                  Escolha seu plano
                </Link>
              </p>
            </div>

            {/* Admin Hint */}
            <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-gray-900/50 border border-gray-800 rounded-xl">
              <p className="text-xs text-gray-500 text-center">
                💡 Dica: Use <span className="text-yellow-400 font-mono">admin</span> / <span className="text-yellow-400 font-mono">admin</span> para acesso administrativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
