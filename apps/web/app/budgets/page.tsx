const rows = [
  { id: 1, type: 'Pemasukan', category: 'Gaji', amount: 'Rp 4.000.000', date: '2026-10-01' },
  { id: 2, type: 'Pengeluaran', category: 'Sewa', amount: 'Rp 1.400.000', date: '2026-10-02' },
  { id: 3, type: 'Pengeluaran', category: 'Makanan', amount: 'Rp 850.000', date: '2026-10-03' },
  { id: 4, type: 'Tabungan', category: 'Darurat', amount: 'Rp 500.000', date: '2026-10-05' },
];

export default function TransactionsPage() {
  return (
    <main style={{ padding: 32 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1>Transaksi</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 16, overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#e2e8f0' }}>
              <th style={{ padding: 12, textAlign: 'left' }}>ID</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Jenis</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Kategori</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Jumlah</th>
              <th style={{ padding: 12, textAlign: 'left' }}>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ padding: 12 }}>{row.id}</td>
                <td style={{ padding: 12 }}>{row.type}</td>
                <td style={{ padding: 12 }}>{row.category}</td>
                <td style={{ padding: 12 }}>{row.amount}</td>
                <td style={{ padding: 12 }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
