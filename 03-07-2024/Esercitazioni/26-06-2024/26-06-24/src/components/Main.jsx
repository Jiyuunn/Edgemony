import React from "react";
import "./Main.css";
import articles from "../post.json";

const sidebarLinks = ["Static Element 1", "Static Element 2"];

const Main = () => {
  return (
    <main className="main-content">
      <aside className="sidebar">
        {sidebarLinks.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </aside>
      <section className="articles">
        {articles.map((article) => (
          <article key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>
              <small>By: {article.author}</small>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
