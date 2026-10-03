import type { Budget, DashboardData, LearningSchedule, Reminder, Transaction } from './types.js';

export const financeTransactions: Transaction[] = [
  { id: 1, type: 'income', category: 'Salary', amount: 4000000, note: 'Gaji bulanan', date: '2026-10-01' },
  { id: 2, type: 'expense', category: 'Rent', amount: 1400000, note: 'Sewa rumah', date: '2026-10-02' },
  { id: 3, type: 'expense', category: 'Food', amount: 850000, note: 'Belanja kebutuhan harian', date: '2026-10-03' },
  { id: 4, type: 'investment', category: 'Mutual Fund', amount: 550000, note: 'Investasi bulanan', date: '2026-10-04' },
  { id: 5, type: 'saving', category: 'Emergency Fund', amount: 500000, note: 'Tabungan darurat', date: '2026-10-05' },
];

export const budgets: Budget[] = [
  { id: 1, category: 'Food', limit: 1500000, used: 850000, unit: 'IDR' },
  { id: 2, category: 'Rent', limit: 1500000, used: 1400000, unit: 'IDR' },
  { id: 3, category: 'Transport', limit: 500000, used: 260000, unit: 'IDR' },
  { id: 4, category: 'Learning', limit: 300000, used: 180000, unit: 'IDR' },
];

export const learningSchedule: LearningSchedule[] = [
  { id: 1, language: 'English', topic: 'Daily Conversation', time: '07:30 - 08:00', progress: 78, level: 'Intermediate' },
  { id: 2, language: 'Deutsch', topic: 'Grammar + Vocabulary', time: '18:30 - 19:00', progress: 65, level: 'Beginner' },
  { id: 3, language: 'Mandarin', topic: 'Pinyin + Hanzi', time: '20:00 - 20:30', progress: 71, level: 'Intermediate' },
];

export const reminders: Reminder[] = [
  { id: 1, title: 'Catat transaksi harian sebelum 21.00', time: '21:00', enabled: true },
  { id: 2, title: 'Cek saldo dan target tabungan hari ini', time: '08:00', enabled: true },
  { id: 3, title: 'Belajar bahasa 30 menit dan ulang vokab', time: '07:30', enabled: true },
  { id: 4, title: 'Backup Excel tiap akhir pekan', time: '19:00', enabled: true },
];

export const dashboardData: DashboardData = {
  balance: 8450000,
  monthlyIncome: 4000000,
  monthlyExpense: 2640000,
  monthlySavings: 500000,
  transactions: financeTransactions,
  budgets,
  learning: learningSchedule,
  reminders,
};
