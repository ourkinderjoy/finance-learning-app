const languages = [
  { name: 'English', topic: 'Daily Conversation', progress: '78%', level: 'Intermediate' },
  { name: 'Deutsch', topic: 'Grammar + Vocabulary', progress: '65%', level: 'Beginner' },
  { name: 'Mandarin', topic: 'Pinyin + Hanzi', progress: '71%', level: 'Intermediate' },
];

export default function LearningPage() {
  return (
    <main style={{ padding: 32 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1>Jadwal Belajar Bahasa</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {languages.map((item) => (
            <div key={item.name} style={{ background: '#fff', borderRadius: 16, padding: 20 }}>
              <h3>{item.name}</h3>
              <p>Topik: {item.topic}</p>
              <p>Level: {item.level}</p>
              <p>Progress: {item.progress}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
