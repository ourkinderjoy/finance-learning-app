const summary = [
  { label: 'Saldo bulan ini', value: 'Rp 8.450.000', tone: 'good' },
  { label: 'Pemasukan', value: 'Rp 4.000.000', tone: 'info' },
  { label: 'Pengeluaran', value: 'Rp 2.640.000', tone: 'warning' },
  { label: 'Target tabungan', value: 'Rp 500.000', tone: 'good' },
];

const transactions = [
  { type: 'Pemasukan', category: 'Gaji', amount: 'Rp 4.000.000', note: 'Gaji bulanan' },
  { type: 'Pengeluaran', category: 'Sewa', amount: 'Rp 1.400.000', note: 'Sewa rumah' },
  { type: 'Pengeluaran', category: 'Makanan', amount: 'Rp 850.000', note: 'Belanja kebutuhan harian' },
  { type: 'Investasi', category: 'Mutual Fund', amount: 'Rp 550.000', note: 'Investasi bulanan' },
  { type: 'Tabungan', category: 'Darurat', amount: 'Rp 500.000', note: 'Tabungan darurat' },
];

const learning = [
  { language: 'English', topic: 'Daily Conversation', time: '07:30 - 08:00', progress: '78%' },
  { language: 'Deutsch', topic: 'Grammar + Vocabulary', time: '18:30 - 19:00', progress: '65%' },
  { language: 'Mandarin', topic: 'Pinyin + Hanzi', time: '20:00 - 20:30', progress: '71%' },
];

const reminders = [
  'Catat transaksi sebelum 21:00',
  'Rekap saldo dan target tabungan',
  'Belajar bahasa 30 menit',
  'Backup Excel akhir pekan',
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f7fb', color: '#0f172a', fontFamily: 'Arial, sans-serif', padding: '32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: '#64748b' }}>Management System</p>
            <h1 style={{ margin: '8px 0 0', fontSize: 36 }}>Finance + Language Learning</h1>
          </div>
          <button style={{ border: 'none', borderRadius: 12, background: '#2563eb', color: '#fff', padding: '12px 16px', fontWeight: 700 }}>+ Tambah Aktivitas</button>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
          {summary.map((item) => (
            <div key={item.label} style={{ background: '#fff', borderRadius: 20, padding: 22, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
              <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>{item.label}</p>
              <h3 style={{ margin: '12px 0 0', fontSize: 30 }}>{item.value}</h3>
            </div>
          ))}
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, marginBottom: 32 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
            <h2 style={{ marginTop: 0 }}>Riwayat Keuangan</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#64748b' }}>
                  <th style={{ padding: '12px 8px' }}>Jenis</th>
                  <th style={{ padding: '12px 8px' }}>Kategori</th>
                  <th style={{ padding: '12px 8px' }}>Jumlah</th>
                  <th style={{ padding: '12px 8px' }}>Catatan</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item, index) => (
                  <tr key={`${item.category}-${index}`}>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e2e8f0' }}>{item.type}</td>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e2e8f0' }}>{item.category}</td>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e2e8f0' }}>{item.amount}</td>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e2e8f0' }}>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
            <h2 style={{ marginTop: 0 }}>Reminder Harian</h2>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, color: '#1f2937' }}>
              {reminders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)' }}>
          <h2 style={{ marginTop: 0 }}>Jadwal Belajar Bahasa</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {learning.map((item) => (
              <div key={item.language} style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: 0 }}>{item.language}</h3>
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>{item.progress}</span>
                </div>
                <p style={{ margin: '12px 0 0', color: '#475569' }}>{item.topic}</p>
                <p style={{ margin: '8px 0 0', color: '#64748b' }}>{item.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
