import { useState } from 'react'


export default function App() {
  const articles = [
    { id: 1, title: 'Primo articolo' },
    { id: 2, title: 'Secondo articolo' },
    { id: 3, title: 'Terzo articolo' },
  ]
  const [newArticles, setNewArticles] = useState('');
  const addArticles = e => {
    e.preventDefault();
    articles.push(newArticles)
  }
  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <form></form>
    </>

  )
}
