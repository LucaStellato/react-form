import { useState } from 'react'


export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Primo articolo' },
    { id: 2, title: 'Secondo articolo' },
    { id: 3, title: 'Terzo articolo' },
  ])
  const [newArticles, setNewArticles] = useState('');
  const addArticles = e => {
    e.preventDefault()
    const updatedArticles = [...articles, { id: articles.length }, { title: newArticles }];
    setArticles(updatedArticles);
  }

  return (
    <>

      <div style={{ textAlign: 'center' }}>
        <h1>REACT FORM</h1>
        <div style={{ display: 'inline-flex', flexDirection: 'column', marginTop: '80px', backgroundColor: 'blue', padding: '3px' }}>
          <form onSubmit={addArticles}>
            <input type='text' value={newArticles} onChange={(e) => setNewArticles(e.target.value)} />
            <button type='submit'>invia</button>
          </form>
        </div>
        <div style={{ textAlign: 'center' }}></div>
        <div style={{ marginTop: '20px', backgroundColor: 'blue', display: 'inline-flex', padding: '45px' }}>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        </div>
      </div>


    </>

  )
}
