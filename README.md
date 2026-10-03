# Finance Learning App

Aplikasi full-stack terpadu untuk:
- manajemen keuangan harian/bulanan
- integrasi data ke Excel (.xlsx)
- reminder harian otomatis
- jadwal belajar bahasa Inggris, Jerman, dan Mandarin
- dashboard interaktif untuk user

## Stack utama
- Frontend: Next.js + React + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL (SQL)
- Excel Integration: Python + openpyxl
- Styling: CSS / inline styles / modern UI
- Scheduler/Reminder: cron / scheduled jobs (Node.js)

## Struktur proyek
```bash
finance-learning-app/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── data.ts
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/
│       ├── app/
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── package.json
│       ├── tsconfig.json
│       └── next.config.js
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
└── apps/api/src/templates/finance-template.json
```

## Fitur utama
1. Keuangan
   - pemasukan / pengeluaran
   - kategori transaksi
   - target tabungan
   - kreditor/debit
   - laporan bulanan
   - export Excel

2. Reminder harian
   - ingat catat transaksi sebelum jam 21.00
   - cek saldo dan target tabungan
   - reminder belajar bahasa sesuai jadwal
   - notifikasi email / telegram / dashboard

3. Belajar bahasa
   - English
   - Deutsch
   - 中文 (Mandarin)
   - jadwal harian
   - materi per level
   - progress tracking
   - quiz / review

## Jalankan project

### 1. Install dependencies root
```bash
npm install
```

### 2. Jalankan backend
```bash
npm run dev:api
```

### 3. Jalankan frontend
```bash
npm run dev:web
```

### 4. Jalankan database via Docker
```bash
docker-compose up -d
```

### 5. Export data Excel
```bash
pip install -r requirements.txt
python scripts/export_finance_excel.py
```

## Endpoint utama API
- GET /api/health
- GET /api/dashboard
- GET /api/transactions
- POST /api/transactions
- GET /api/learning
- GET /api/excel-template

## Catatan
Project ini adalah versi starter yang siap dikembangkan ke level production. Anda dapat menambahkan autentikasi, database real, notifikasi email/Telegram, dan modul belajar dengan level yang lebih lengkap.
