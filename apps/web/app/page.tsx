import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { Request, Response } from 'express';
import { dashboardData, financeTransactions, learningSchedule, reminders, budgets } from './data.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'finance-learning-app-api' });
});

app.get('/api/dashboard', (_req: Request, res: Response) => {
  res.json(dashboardData);
});

app.get('/api/transactions', (_req: Request, res: Response) => {
  res.json(financeTransactions);
});

app.post('/api/transactions', (req: Request, res: Response) => {
  const { type, category, amount, note, date } = req.body || {};

  if (!type || !category || !amount) {
    return res.status(400).json({ error: 'Payload transaksi tidak lengkap.' });
  }

  const newTransaction = {
    id: Date.now(),
    type,
    category,
    amount: Number(amount),
    note: note || 'Transaksi baru',
    date: date || new Date().toISOString().slice(0, 10),
  };

  financeTransactions.unshift(newTransaction);
  return res.status(201).json({ message: 'Transaksi berhasil ditambahkan.', data: newTransaction });
});

app.get('/api/budgets', (_req: Request, res: Response) => {
  res.json(budgets);
});

app.get('/api/reminders', (_req: Request, res: Response) => {
  res.json(reminders);
});

app.get('/api/learning', (_req: Request, res: Response) => {
  res.json({ schedule: learningSchedule, reminders });
});

app.get('/api/excel-template', (_req: Request, res: Response) => {
  const templatePath = path.join(process.cwd(), 'src', 'templates', 'finance-template.json');

  try {
    const raw = readFileSync(templatePath, 'utf-8');
    res.json(JSON.parse(raw));
  } catch {
    res.json({
      balance: dashboardData.balance,
      monthlyIncome: dashboardData.monthlyIncome,
      monthlyExpense: dashboardData.monthlyExpense,
      monthlySavings: dashboardData.monthlySavings,
      transactions: financeTransactions,
      learning: learningSchedule,
    });
  }
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
