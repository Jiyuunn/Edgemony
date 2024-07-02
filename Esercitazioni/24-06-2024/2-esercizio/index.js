document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  const header = document.createElement("header");
  header.innerHTML = `
      <div class='container'>
        <div class='logo'>
            <img src='./apple.svg' alt='Apple Logo' width='20' 
            height='20'
            />
        </div>
        <ul class='menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </div>
    `;

  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebar.innerHTML = `
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    `;

  const mainContent = document.createElement("div");
  mainContent.className = "main-content";

  const footer = document.createElement("footer");
  footer.innerHTML = `
      <div class='container'>
        <div class='footer-cols'>
          <div class='footer-column'>
            <h3>Scopri e acquista</h3>
            <ul>
              <li><a href='#'>Mac</a></li>
              <li><a href='#'>Ipad</a></li>
              <li><a href='#'>Iphone</a></li>
            </ul>
          </div>
          <div class='footer-column'>
            <h3>Account</h3>
            <ul>
              <li><a href='#'>Gestisci il tuo ID Apple</a></li>
              <li><a href='#'>Account Apple Store</a></li>
              <li><a href='#'>iCloud.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;

  app.appendChild(header);
  const container = document.createElement("div");
  container.className = "container";
  container.appendChild(sidebar);
  container.appendChild(mainContent);
  app.appendChild(container);
  app.appendChild(footer);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const article = document.createElement("div");
        article.className = "article";
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><em>Author: ${post.userId}</em></p>
          `;
        mainContent.appendChild(article);
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      mainContent.innerHTML = "<p>Failed to load posts.</p>";
    });
});
