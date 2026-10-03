export type TransactionType = 'income' | 'expense' | 'saving' | 'investment';

export type Transaction = {
  id: number;
  type: TransactionType;
  category: string;
  amount: number;
  note: string;
  date: string;
};

export type Budget = {
  id: number;
  category: string;
  limit: number;
  used: number;
  unit: string;
};

export type LearningLanguage = 'English' | 'Deutsch' | 'Mandarin';

export type LearningSchedule = {
  id: number;
  language: LearningLanguage;
  topic: string;
  time: string;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type Reminder = {
  id: number;
  title: string;
  time: string;
  enabled: boolean;
};

export type DashboardData = {
  balance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  monthlySavings: number;
  transactions: Transaction[];
  budgets: Budget[];
  learning: LearningSchedule[];
  reminders: Reminder[];
};
