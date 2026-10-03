# finance-learning-app
Aplikasi terintegrasi untuk manajemen keuangan dengan Excel integration dan jadwal belajar bahasa (English, Deutsch, 中文)

## Fitur utama
- Dashboard keuangan harian dan bulanan
- Catatan pemasukan, pengeluaran, dan target tabungan
- Reminder harian untuk transaksi dan belajar
- Integrasi export/import Excel
- Jadwal belajar bahasa Inggris, Jerman, dan Mandarin
- Struktur backend + frontend siap dikembangkan

## Stack proyek
- Frontend: Next.js + TypeScript
- Backend: Express + TypeScript
- Excel processing: Python + openpyxl
- Database: PostgreSQL (direkomendasikan untuk tahap berikutnya)

## Struktur proyek
```
finance-learning-app/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   └── package.json
│   └── web/
│       ├── app/
│       └── package.json
├── scripts/
│   └── export_finance_excel.py
├── package.json
├── docker-compose.yml
├── .env.example
└── README.md
```

## Cara menjalankan
### 1) Install dependencies
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

### 4) Export Excel via Python
```bash
pip install -r requirements.txt
python scripts/export_finance_excel.py
```

## Catatan
Aplikasi ini merupakan versi MVP starter. Fitur akan dikembangkan lebih lanjut ke versi lengkap dengan autentikasi, database, notifikasi, dan modul belajar yang lebih detail.
