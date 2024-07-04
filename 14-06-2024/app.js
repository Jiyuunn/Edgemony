fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const API_URL = config.apiUrl;

        const uploadFile = async (file) => {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch(`${API_URL}/files/upload`, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Error uploading file');
                }

                const data = await response.json();
                return data.location;
            } catch (error) {
                console.error('Error:', error);
                return null;
            }
        };

        const postForm = document.getElementById('postForm');
        const updateForm = document.getElementById('updateForm');
        const deleteForm = document.getElementById('deleteForm');
        const deleteFeedback = document.getElementById('deleteFeedback');
        const apiData = document.getElementById('apiData');
        const fileInput = document.getElementById('fileInput');
        const searchButton = document.getElementById('searchButton');
        const updateSection = document.getElementById('updateFields');

        postForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const price = document.getElementById('price').value;
            const file = fileInput.files[0];

            let imageUrl = '';
            if (file) {
                imageUrl = await uploadFile(file);
            }

            const newProduct = {
                title,
                description,
                price,
                categoryId: config.defaultCategoryId,
                images: [imageUrl]
            };

            try {
                const response = await fetch(`${API_URL}/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                });

                if (!response.ok) {
                    throw new Error('Error creating product');
                }

                const data = await response.json();
                console.log('New Product ID:', data.id);
                // Optionally, refresh the product list
                fetchApiData();
            } catch (error) {
                console.error('Error creating product:', error);
            }
        });

        searchButton.addEventListener('click', async () => {
            const searchId = document.getElementById('searchId').value;

            try {
                const response = await fetch(`${API_URL}/products/${searchId}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const product = await response.json();

                document.getElementById('updateTitle').value = product.title;
                document.getElementById('updateDescription').value = product.description;
                document.getElementById('updatePrice').value = product.price;

                updateSection.style.display = 'block';
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        });

        updateForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const productId = document.getElementById('searchId').value;
            const title = document.getElementById('updateTitle').value;
            const description = document.getElementById('updateDescription').value;
            const price = document.getElementById('updatePrice').value;

            const updatedProduct = {
                title: title || undefined,
                description: description || undefined,
                price: price || undefined
            };

            try {
                const response = await fetch(`${API_URL}/products/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedProduct)
                });

                if (!response.ok) {
                    throw new Error('Error updating product');
                }

                const data = await response.json();
                console.log('Product updated:', data);

                updateSection.style.display = 'none';
                // Optionally, refresh the product list
                fetchApiData();
            } catch (error) {
                console.error('Error updating product:', error);
            }
        });

        deleteForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const deleteId = document.getElementById('deleteId').value;

            try {
                const response = await fetch(`${API_URL}/products/${deleteId}`, {
                    method: 'DELETE'
                });

                if (!response.ok) {
                    throw new Error('Error deleting product');
                }

                deleteFeedback.textContent = 'Product deleted successfully';
                setTimeout(() => {
                    deleteFeedback.textContent = '';
                }, 3000);
                // Optionally, refresh the product list
                fetchApiData();
            } catch (error) {
                console.error('Error deleting product:', error);
                deleteFeedback.textContent = 'Error deleting product';
            }
        });

        const fetchApiData = async () => {
            try {
                const response = await fetch(`${API_URL}/products`);
                const data = await response.json();
                apiData.innerHTML = '';

                data.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.className = 'product';
                    productElement.innerHTML = `
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                    `;
                    apiData.appendChild(productElement);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchApiData();
    })
    .catch(error => console.error('Error loading config:', error));
