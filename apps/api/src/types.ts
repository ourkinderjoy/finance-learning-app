export type TransactionType = 'income' | 'expense' | 'saving' | 'investment';

export type Transaction = {
  id: number;
  type: TransactionType;
  category: string;
  amount: number;
  note: string;
  date: string;
};

export type LearningSchedule = {
  language: 'English' | 'Deutsch' | 'Mandarin';
  topic: string;
  time: string;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type DashboardData = {
  balance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  monthlySavings: number;
  transactions: Transaction[];
  learning: LearningSchedule[];
  reminders: string[];
};
