document.getElementById('load-products').addEventListener('click', loadProducts);
document.getElementById('search').addEventListener('input', filterProducts);

let products = [];

function loadProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';  // Puliamo il contenitore
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <h2>${product.title}</h2>
           
            <img src="${product.image}" alt="${product.title}" />
             <p class="product-rating">${product.rating.rate}/5</p>
             <p>${product.description}</p>
             <p> $${product.price}</p>
        `;
        container.appendChild(productElement);
    });
}

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}


const descriptions = document.querySelectorAll('.product p');



descriptions.forEach(description => {
   
    const text = description.textContent.trim();
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    
    
    description.textContent = capitalizedText;
});

