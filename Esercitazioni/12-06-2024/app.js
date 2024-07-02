const API_URL = 'https://api.escuelajs.co/api/v1';
const JWT_TOKEN = 'token'; 


const uploadFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_URL}/files/uploadFile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Errore nel caricamento del file');
        }

        const data = await response.json();
        return data.url; // Restituiamo l'URL del file caricato
    } catch (error) {
        console.error('Errore:', error);
        return null;
    }
};


const postForm = document.getElementById('postForm');
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
        categoryId: 1,
        images: [imageUrl]
    };

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JWT_TOKEN}`
            },
            body: JSON.stringify(newProduct)
        });
        
        if (!response.ok) {
            throw new Error('Errore nel creare il prodotto');
        }
        
        const data = await response.json();
        console.log('New Product ID:', data.id);
    } catch (error) {
        console.error('Errore:', error);
    }
});

deleteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const deleteId = document.getElementById('deleteId').value;

    try {
        const response = await fetch(`${API_URL}/products/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
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
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('api-item');
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
            <img src="${item.images[0]}" alt="${item.title}">
        `;
        apiData.appendChild(itemDiv);
    });
};

fetchApiData();
