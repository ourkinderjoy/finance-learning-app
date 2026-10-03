import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

const financeData = {
  balance: 8450000,
  monthlyIncome: 4000000,
  monthlyExpense: 2640000,
  monthlySavings: 500000,
  transactions: [
    { id: 1, type: 'Income', category: 'Salary', amount: 4000000 },
    { id: 2, type: 'Expense', category: 'Rent', amount: 1400000 },
    { id: 3, type: 'Expense', category: 'Food', amount: 850000 },
    { id: 4, type: 'Investment', category: 'Mutual Fund', amount: 550000 }
  ],
};

const learningData = {
  schedule: [
    { language: 'English', topic: 'Daily Conversation', time: '07:30 - 08:00', progress: 78 },
    { language: 'Deutsch', topic: 'Grammar + Vocabulary', time: '18:30 - 19:00', progress: 65 },
    { language: 'Mandarin', topic: 'Pinyin + Hanzi', time: '20:00 - 20:30', progress: 71 }
  ],
  reminders: [
    'Catat transaksi harian sebelum 21.00',
    'Cek anggaran kebutuhan tiap hari',
    'Belajar bahasa 30 menit dan review vocab',
    'Backup file Excel tiap akhir pekan'
  ]
};

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'finance-learning-app-api' });
});

app.get('/api/dashboard', (_req: Request, res: Response) => {
  res.json({
    ...financeData,
    learning: learningData
  });
});

app.get('/api/transactions', (_req: Request, res: Response) => {
  res.json(financeData.transactions);
});

app.get('/api/learning', (_req: Request, res: Response) => {
  res.json(learningData);
});

app.post('/api/transactions', (req: Request, res: Response) => {
  const payload = req.body;

  if (!payload || !payload.type || !payload.category || !payload.amount) {
    return res.status(400).json({ error: 'Invalid transaction payload' });
  }

  financeData.transactions.unshift({
    id: Date.now(),
    type: payload.type,
    category: payload.category,
    amount: Number(payload.amount)
  });

  return res.status(201).json({ message: 'Transaction created successfully' });
});

app.get('/api/excel-template', (_req: Request, res: Response) => {
  const templatePath = path.join(process.cwd(), 'src', 'templates', 'finance-template.json');

  try {
    const data = readFileSync(templatePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.json({
      balance: financeData.balance,
      transactions: financeData.transactions,
      learning: learningData.schedule
    });
  }
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
