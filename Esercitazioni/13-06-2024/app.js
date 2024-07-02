fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const API_URL = config.apiUrl;
        const DEFAULT_CATEGORY_ID = config.defaultCategoryId;

        const uploadFile = async (file) => {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch(`${API_URL}/files/upload`, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Errore nel caricamento del file');
                }

                const data = await response.json();
                return data.location; // Restituiamo l'URL del file caricato
            } catch (error) {
                console.error('Errore:', error);
                return null;
            }
        };

        const postForm = document.getElementById('postForm');
        const putForm = document.getElementById('putForm');
        const patchForm = document.getElementById('patchForm');
        const deleteForm = document.getElementById('deleteForm');
        const deleteFeedback = document.getElementById('deleteFeedback');
        const apiData = document.getElementById('apiData');
        const fileInput = document.getElementById('fileInput');

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
                categoryId: DEFAULT_CATEGORY_ID,
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
                    throw new Error('Errore nel creare il prodotto');
                }

                const data = await response.json();
                console.log('New Product ID:', data.id);
            } catch (error) {
                console.error('Errore nella creazione del prodotto:', error);
            }
        });

        putForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const productId = document.getElementById('putId').value;
            const title = document.getElementById('putTitle').value;
            const description = document.getElementById('putDescription').value;
            const price = document.getElementById('putPrice').value;

            const updatedProduct = {};
            if (title) updatedProduct.title = title;
            if (description) updatedProduct.description = description;
            if (price) updatedProduct.price = price;

            try {
                const response = await fetch(`${API_URL}/products/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedProduct)
                });

                if (!response.ok) {
                    throw new Error('Errore nell\'aggiornamento del prodotto');
                }

                const data = await response.json();
                console.log('Product updated:', data);

                // Verifica con GET by ID
                const verifyResponse = await fetch(`${API_URL}/products/${productId}`);
                const verifyData = await verifyResponse.json();
                console.log('Verified Product:', verifyData);
            } catch (error) {
                console.error('Errore:', error);
            }
        });

        patchForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const productId = document.getElementById('patchId').value;
            const title = document.getElementById('patchTitle').value;
            const description = document.getElementById('patchDescription').value;
            const price = document.getElementById('patchPrice').value;

            const updatedProduct = {};
            if (title) updatedProduct.title = title;
            if (description) updatedProduct.description = description;
            if (price) updatedProduct.price = price;

            try {
                const response = await fetch(`${API_URL}/products/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedProduct)
                });

                if (!response.ok) {
                    throw new Error('Errore nell\'aggiornamento del prodotto');
                }

                const data = await response.json();
                console.log('Product updated:', data);

                // Verifica con GET by ID
                const verifyResponse = await fetch(`${API_URL}/products/${productId}`);
                const verifyData = await verifyResponse.json();
                console.log('Verified Product:', verifyData);
            } catch (error) {
                console.error('Errore:', error);
            }
        });

        deleteForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const deleteId = document.getElementById('deleteId').value;

            try {
                const response = await fetch(`${API_URL}/products/${deleteId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    deleteFeedback.textContent = 'Object removed';
                    setTimeout(() => {
                        deleteFeedback.textContent = '';
                    }, 3000);
                } else {
                    deleteFeedback.textContent = 'Failed to remove object';
                    setTimeout(() => {
                        deleteFeedback.textContent = '';
                    }, 3000);
                }
            } catch (error) {
                console.error('Errore:', error);
                deleteFeedback.textContent = 'Error occurred';
                setTimeout(() => {
                    deleteFeedback.textContent = '';
                }, 3000);
            }
        });

        const fetchApiData = async () => {
            try {
                const response = await fetch(`${API_URL}/products`);
                if (!response.ok) {
                    throw new Error('Errore nel recupero dei dati');
                }
                const data = await response.json();
                displayApiData(data);
            } catch (error) {
                console.error('Errore:', error);
            }
        };

        const displayApiData = (data) => {
            apiData.innerHTML = '';
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('product');
                div.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price}</p>
                    <p>ID: ${item.id}</p>
                `;
                apiData.appendChild(div);
            });
        };

        fetchApiData();
    })
    .catch(error => console.error('Errore nel caricamento della configurazione:', error));
