import { useState } from 'react'


export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Primo articolo' },
    { id: 2, title: 'Secondo articolo' },
    { id: 3, title: 'Terzo articolo' },
  ])
  const [newArticles, setNewArticles] = useState('');
  const addArticles = e => {
    articles.push(newArticles);
  }
  const updatedArticles = [...articles, newArticles];
  setArticles(updatedArticles);
  return (
    <>
      <form onSubmit={addArticles}>
        <input type='text' value={newArticles} onChange={(e) => setNewArticles(e.target.value)} />
        <button type='submit'>invia</button>
      </form>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>

    </>

  )
}
