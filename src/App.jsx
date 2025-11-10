import { useState } from 'react'


export default function App() {
  const articles = [
    { id: 1, title: 'Primo articolo' },
    { id: 2, title: 'Secondo articolo' },
    { id: 3, title: 'Terzo articolo' },
  ]
  const [newTask, setNewTask] = useState('');
  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>

  )
}
