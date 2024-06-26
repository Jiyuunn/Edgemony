import React from 'react';
import './Main.css';

const articles = [
  {
    id: 1,
    title: 'Article 1',
    body: 'This is the body of the first article.',
    userId: 1,
    author: 'Author 1'
  },
  {
    id: 2,
    title: 'Article 2',
    body: 'This is the body of the second article.',
    userId: 2,
    author: 'Author 2'
  },
];

const Main = () => {
  return (
    <main className="main-content">
      <aside className="sidebar">
        <div>Static Element 1</div>
        <div>Static Element 2</div>
      </aside>
      <section className="articles">
        {articles.map(article => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p><small>By: {article.author}</small></p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
