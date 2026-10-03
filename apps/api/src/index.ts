import type { DashboardData, LearningSchedule, Transaction } from './types.js';

export const financeTransactions: Transaction[] = [
  {
    id: 1,
    type: 'income',
    category: 'Salary',
    amount: 4000000,
    note: 'Gaji bulanan',
    date: '2026-10-01'
  },
  {
    id: 2,
    type: 'expense',
    category: 'Rent',
    amount: 1400000,
    note: 'Sewa rumah',
    date: '2026-10-02'
  },
  {
    id: 3,
    type: 'expense',
    category: 'Food',
    amount: 850000,
    note: 'Belanja kebutuhan harian',
    date: '2026-10-03'
  },
  {
    id: 4,
    type: 'investment',
    category: 'Mutual Fund',
    amount: 550000,
    note: 'Investasi bulanan',
    date: '2026-10-04'
  }
];

export const learningSchedule: LearningSchedule[] = [
  {
    language: 'English',
    topic: 'Daily Conversation',
    time: '07:30 - 08:00',
    progress: 78,
    level: 'Intermediate'
  },
  {
    language: 'Deutsch',
    topic: 'Grammar + Vocabulary',
    time: '18:30 - 19:00',
    progress: 65,
    level: 'Beginner'
  },
  {
    language: 'Mandarin',
    topic: 'Pinyin + Hanzi',
    time: '20:00 - 20:30',
    progress: 71,
    level: 'Intermediate'
  }
];

export const reminders = [
  'Catat transaksi harian sebelum 21.00',
  'Cek saldo target tabungan hari ini',
  'Belajar bahasa 30 menit dan ulang vocab',
  'Backup data Excel setiap akhir pekan'
];

export const dashboardData: DashboardData = {
  balance: 8450000,
  monthlyIncome: 4000000,
  monthlyExpense: 2640000,
  monthlySavings: 500000,
  transactions: financeTransactions,
  learning: learningSchedule,
  reminders
};
