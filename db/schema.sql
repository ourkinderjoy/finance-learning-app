# finance-learning-app
Aplikasi terintegrasi untuk manajemen keuangan, reminder harian, dan jadwal belajar bahasa Inggris, Jerman, serta Mandarin.

## Fitur utama
- Dashboard keuangan harian dan bulanan
- Pemasukan, pengeluaran, tabungan, dan investas
- Anggaran per kategori
- Reminder otomatis harian
- Jadwal belajar bahasa per hari
- Export data ke Excel
- Struktur backend + frontend siap dikembangkan

## Stack utama
- Frontend: Next.js + React + TypeScript
- Backend: Express + TypeScript
- Database: PostgreSQL
- Excel: openpyxl / xlsx
- Scheduler: cron / scheduled jobs

## Struktur proyek
```bash
finance-learning-app/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── data.ts
│   │   │   ├── index.ts
│   │   │   ├── templates/
│   │   │   │   └── finance-template.json
│   │   │   └── types.ts
│   │   └── package.json
│   └── web/
│       ├── app/
│       │   ├── budgets/
│       │   ├── learning/
│       │   ├── reminders/
│       │   ├── transactions/
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       └── package.json
├── db/
│   └── schema.sql
├── scripts/
│   └── export_finance_excel.py
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
├── requirements.txt
└── exports/
```

## Cara menyalakan
### 1) Install dependency root
```bash
npm install
```

### 2) Jalankan backend
```bash
npm run dev:api
```

### 3) Jalankan frontend
```bash
npm run dev:web
```

### 4) Jalankan database PostgreSQL
```bash
docker-compose up -d
```

### 5) Export Excel
```bash
pip install -r requirements.txt
python scripts/export_finance_excel.py
```

## Endpoint API utama
- GET /api/health
- GET /api/dashboard
- GET /api/transactions
- POST /api/transactions
- GET /api/budgets
- GET /api/reminders
- GET /api/learning
- GET /api/excel-template

## Modul belajar
- English: daily conversation, grammar, vocabulary
- Deutsch: basic speaking, noun articles, phrase practice
- Mandarin: pinyin, hanzi, numbers and greetings

## Catatan
Proyek ini merupakan starter lengkap yang siap dikembangkan lebih lanjut menjadi aplikasi full production dengan autentikasi, database real, integrasi notifikasi, dan modul belajar yang lebih detail.
