export default function Page() {
  const summary = [
    { label: 'Saldo bulan ini', value: 'Rp 8.450.000', tone: 'good' },
    { label: 'Pengeluaran', value: 'Rp 2.640.000', tone: 'warning' },
    { label: 'Target tabungan', value: 'Rp 500.000', tone: 'info' },
    { label: 'Streak belajar', value: '12 hari', tone: 'good' }
  ];

  const finance = [
    { type: 'Pemasukan', amount: 'Rp 4.000.000', category: 'Gaji' },
    { type: 'Pengeluaran', amount: 'Rp 1.400.000', category: 'Sewa' },
    { type: 'Pengeluaran', amount: 'Rp 850.000', category: 'Makanan' },
    { type: 'Investasi', amount: 'Rp 550.000', category: 'Reksa Dana' }
  ];

  const learning = [
    { language: 'English', focus: 'Daily conversation', time: '07.30 - 08.00', progress: '78%' },
    { language: 'Deutsch', focus: 'Grammar + vocabulary', time: '18.30 - 19.00', progress: '65%' },
    { language: 'Mandarin', focus: 'Pinyin + hanzi', time: '20.00 - 20.30', progress: '71%' }
  ];

  const reminders = [
    'Catat transaksi harian sebelum 21.00',
    'Cek anggaran kebutuhan 1x hari',
    'Belajar bahasa 30 menit dengan repeat vocab',
    'Backup data Excel tiap akhir pekan'
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#f5f7fb', color: '#14213d', fontFamily: 'Arial, sans-serif', padding: '32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div>
            <p style={{ margin: 0, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, color: '#6b7280' }}>Finance + Learning Planner</p>
            <h1 style={{ margin: '8px 0 0', fontSize: 36 }}>Dashboard Aplikasi</h1>
          </div>
          <button style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '12px 18px', borderRadius: 12, fontWeight: 700 }}>+ Tambah Aktivitas</button>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 30 }}>
          {summary.map((item) => (
            <div key={item.label} style={{ background: '#fff', borderRadius: 20, padding: 20, boxShadow: '0 10px 30px rgba(15,23,42,0.05)' }}>
              <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>{item.label}</p>
              <h3 style={{ margin: '12px 0 0', fontSize: 28 }}>{item.value}</h3>
            </div>
          ))}
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, marginBottom: 30 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15,23,42,0.05)' }}>
            <h2 style={{ marginTop: 0 }}>Keuangan</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#64748b' }}>
                  <th style={{ padding: '12px 8px' }}>Jenis</th>
                  <th style={{ padding: '12px 8px' }}>Jumlah</th>
                  <th style={{ padding: '12px 8px' }}>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {finance.map((row) => (
                  <tr key={`${row.type}-${row.category}`}>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e5e7eb' }}>{row.type}</td>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e5e7eb' }}>{row.amount}</td>
                    <td style={{ padding: '12px 8px', borderTop: '1px solid #e5e7eb' }}>{row.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15,23,42,0.05)' }}>
            <h2 style={{ marginTop: 0 }}>Reminder Harian</h2>
            <ul style={{ paddingLeft: 18, lineHeight: 2, color: '#1f2937' }}>
              {reminders.map((reminder) => (
                <li key={reminder}>{reminder}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 10px 30px rgba(15,23,42,0.05)' }}>
          <h2 style={{ marginTop: 0 }}>Jadwal Belajar Bahasa</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {learning.map((item) => (
              <div key={item.language} style={{ border: '1px solid #e5e7eb', borderRadius: 16, padding: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0 }}>{item.language}</h3>
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>{item.progress}</span>
                </div>
                <p style={{ margin: '12px 0 0', color: '#475569' }}>{item.focus}</p>
                <p style={{ margin: '8px 0 0', color: '#64748b' }}>{item.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
