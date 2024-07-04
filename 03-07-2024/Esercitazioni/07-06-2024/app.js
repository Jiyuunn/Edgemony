let API_BASE_URL = 'https://api.themoviedb.org/3/movie';
let IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const movieContainer = document.getElementById('movie-container');
const searchBar = document.getElementById('searchBar');
const buttons = document.getElementById('buttons');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
let currentPage = 1;
let currentEndpoint = 'popular';
let paginationLimit = 20;

// Load config.json
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        API_BASE_URL = config.api_base_url;
        IMAGE_BASE_URL = config.image_base_url;
        currentEndpoint = config.endpoints.popular;
        paginationLimit = config.pagination_limit;
        // Initial fetch
        fetchMovies(currentEndpoint, currentPage);
    })
    .catch(error => console.error('Error loading config:', error));

// Function to fetch movies
const fetchMovies = async (endpoint, page = 1, query = '') => {
    let url = `${API_BASE_URL}/${endpoint}?page=${page}`;
    if (query) {
        url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
    }
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMovies(data.results);
        return data.page;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Function to display movies
const displayMovies = (movies) => {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        const posterPath = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image';
        movieCard.innerHTML = `
            <img src="${posterPath}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        movieContainer.appendChild(movieCard);
    });
};

// Event listeners for buttons
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        currentEndpoint = event.target.getAttribute('data-endpoint');
        currentPage = 1;
        fetchMovies(currentEndpoint, currentPage);
    }
});

// Event listener for search bar
searchBar.addEventListener('input', () => {
    const query = searchBar.value;
    if (query) {
        fetchMovies('', 1, query);
    } else {
        fetchMovies(currentEndpoint, currentPage);
    }
});

// Event listeners for pagination buttons
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchMovies(currentEndpoint, currentPage);
    }
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    fetchMovies(currentEndpoint, currentPage);
});
