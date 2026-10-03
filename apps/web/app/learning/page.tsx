const reminders = [
  { title: 'Catat transaksi harian', time: '21:00', enabled: true },
  { title: 'Cek saldo target tabungan', time: '08:00', enabled: true },
  { title: 'Belajar bahasa 30 menit', time: '07:30', enabled: true },
  { title: 'Backup Excel akhir pekan', time: '19:00', enabled: true },
];

export default function RemindersPage() {
  return (
    <main style={{ padding: 32 }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1>Reminder Harian</h1>
        <div style={{ background: '#fff', borderRadius: 16, padding: 20 }}>
          {reminders.map((reminder) => (
            <div key={reminder.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <strong>{reminder.title}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span>{reminder.time}</span>
                <span style={{ background: reminder.enabled ? '#22c55e' : '#94a3b8', color: '#fff', padding: '6px 10px', borderRadius: 999 }}>{reminder.enabled ? 'Aktif' : 'Nonaktif'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
