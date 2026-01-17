'use client';

import { useState } from 'react';
import { 
  ArrowLeft,
  Plus,
  TrendingUp,
  TrendingDown,
  Wallet,
  Calendar,
  DollarSign,
  Tag,
  Search
} from 'lucide-react';
import Link from 'next/link';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
}

export default function FinancasPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'expense',
      amount: 45.90,
      category: 'Alimentação',
      description: 'Almoço',
      date: new Date()
    },
    {
      id: '2',
      type: 'income',
      amount: 3500.00,
      category: 'Salário',
      description: 'Salário mensal',
      date: new Date()
    }
  ]);

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-black text-white">
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
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Finanças</h2>
              <p className="text-xs sm:text-sm text-gray-400">Organize seus ganhos e gastos</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-xl transition-all hover:scale-105"
          >
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
      </header>

      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Total Balance */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-yellow-400" />
                <p className="text-xs sm:text-sm text-gray-400">Saldo Total</p>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                R$ {balance.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Income */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <p className="text-xs sm:text-sm text-gray-400">Receitas</p>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-green-400">
              R$ {totalIncome.toFixed(2)}
            </p>
          </div>

          {/* Expenses */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <p className="text-xs sm:text-sm text-gray-400">Despesas</p>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-red-400">
              R$ {totalExpense.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar transações..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Transações Recentes</h3>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-gray-950 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      transaction.type === 'income'
                        ? 'bg-green-400/10 text-green-400'
                        : 'bg-red-400/10 text-red-400'
                    }`}
                  >
                    {transaction.type === 'income' ? (
                      <TrendingUp className="w-5 h-5" />
                    ) : (
                      <TrendingDown className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">
                      {transaction.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Tag className="w-3 h-3 text-gray-500" />
                      <p className="text-xs text-gray-400">{transaction.category}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg sm:text-xl font-bold ${
                      transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {transaction.date.toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {transactions.length === 0 && (
          <div className="text-center py-12">
            <Wallet className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 mb-2">Nenhuma transação registrada</p>
            <p className="text-sm text-gray-500">Clique no botão + para adicionar</p>
          </div>
        )}
      </div>

      {/* Add Transaction Modal (Placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Nova Transação</h3>
            <p className="text-gray-400 text-sm mb-6">
              Funcionalidade em desenvolvimento. Em breve você poderá adicionar transações aqui!
            </p>
            <button
              onClick={() => setShowAddModal(false)}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold rounded-xl transition-all"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
