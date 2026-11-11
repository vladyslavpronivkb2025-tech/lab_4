import { useState, useEffect } from 'react';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Денна тема: 07:00 - 21:00, нічна тема: інший час
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isLight = theme === 'light';

  return (
    <div
      className={`min-h-screen px-4 py-8 transition-colors duration-300 ${
        isLight ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-200'
      }`}
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Кнопка ручного перемикання теми */}
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className={`rounded-lg border px-4 py-2 text-xs font-mono font-semibold transition ${
              isLight
                ? 'border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-50'
                : 'border-slate-700 bg-slate-900 text-emerald-400 hover:bg-slate-800'
            }`}
          >
            {isLight ? '☀️ Денна тема' : '🌙 Нічна тема'} (Змінити)
          </button>
        </div>

        {/* Шапка резюме */}
        <header className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
          <span className="mb-2 inline-block rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
            Група КБ-209
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Владислав <span className="text-emerald-400">Пронів</span>
          </h1>
          <p className="mt-2 text-slate-400">
            Студент кафедри захисту інформації НУ «Львівська політехніка»
          </p>
        </header>

        {/* Блок динамічних відгуків з бекенду (варіант 16) */}
        <Reviews />

        {/* Футер із системною інформацією з localStorage */}
        <Footer />

        {/* Модальне вікно Formspree */}
        <ContactForm />
      </div>
    </div>
  );
}

export default App;