const budgets = [
  { category: 'Food', limit: 'Rp 1.500.000', used: 'Rp 850.000', remaining: 'Rp 650.000' },
  { category: 'Rent', limit: 'Rp 1.500.000', used: 'Rp 1.400.000', remaining: 'Rp 100.000' },
  { category: 'Transport', limit: 'Rp 500.000', used: 'Rp 260.000', remaining: 'Rp 240.000' },
  { category: 'Learning', limit: 'Rp 300.000', used: 'Rp 180.000', remaining: 'Rp 120.000' },
];

export default function BudgetsPage() {
  return (
    <main style={{ padding: 32 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1>Anggaran Bulanan</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {budgets.map((budget) => (
            <div key={budget.category} style={{ background: '#fff', borderRadius: 16, padding: 20 }}>
              <h3>{budget.category}</h3>
              <p>Batas: {budget.limit}</p>
              <p>Dipakai: {budget.used}</p>
              <p>Sisa: {budget.remaining}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
