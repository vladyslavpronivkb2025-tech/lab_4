import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Варіант 16
    fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження відгуків:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
      <h2 className="mb-4 text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2">
        Відгуки роботодавців (Пост №16)
      </h2>

      {isLoading ? (
        <p className="text-sm text-slate-400">Отримання відгуків із сервера...</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-semibold text-emerald-400">{comment.name}</span>
                <span className="font-mono text-xs text-slate-400">{comment.email}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;