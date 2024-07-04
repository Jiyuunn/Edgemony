 const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjVhZjlhMzZkOTVlZjUxMWNjZDEyODBhZDIxZDZjOCIsInN1YiI6IjY2NjMwNDg0YjJjNjEwNTIxNTE0ZmExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2QPgSLsmIlJ-M0OAV_Etnz1uNfW5fooApnqnLqvkfyg';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const movieContainer = document.getElementById('movie-container');
const searchBar = document.getElementById('searchBar');
const buttons = document.getElementById('buttons');
const genreContainer = document.getElementById('genre-container');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
let currentPage = 1;
let currentEndpoint = 'movie/popular';
let currentGenre = ''; // To keep track of selected genre
let currentQuery = ''; // To keep track of the current search query

// Function to fetch data
const fetchData = async (endpoint, params = {}) => {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
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
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Function to fetch movies
const fetchMovies = async (endpoint, page = 1, query = '', genreId = '') => {
    const params = { page };
    if (query) {
        endpoint = 'search/movie';
        params.query = query;
    } else if (genreId) {
        params.with_genres = genreId;
    }
    const data = await fetchData(endpoint, params);
    if (data) {
        displayMovies(data.results);
        return data.page;
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

// Function to fetch genres
const fetchGenres = async (type = 'movie') => {
    const endpoint = `genre/${type}/list`;
    const data = await fetchData(endpoint);
    if (data) {
        displayGenres(data.genres);
    }
};

// Function to display genres
const displayGenres = (genres) => {
    genreContainer.innerHTML = '';
    genres.forEach(genre => {
        const genreButton = document.createElement('button');
        genreButton.textContent = genre.name;
        genreButton.setAttribute('data-genre-id', genre.id);
        genreButton.addEventListener('click', () => filterByGenre(genre.id));
        genreContainer.appendChild(genreButton);
    });
};

// Function to filter movies by genre
const filterByGenre = (genreId) => {
    currentGenre = genreId;
    currentQuery = ''; // Reset search query
    currentPage = 1;
    fetchMovies(currentEndpoint, currentPage, '', genreId);
};

// Event listeners for buttons
buttons.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        currentEndpoint = event.target.getAttribute('data-endpoint');
        currentGenre = ''; // Reset genre filter
        currentQuery = ''; // Reset search query
        currentPage = 1;
        fetchMovies(currentEndpoint, currentPage);
        const type = currentEndpoint.split('/')[0];
        fetchGenres(type);
    }
});

// Event listener for search bar
searchBar.addEventListener('input', () => {
    currentQuery = searchBar.value;
    currentGenre = ''; // Reset genre filter
    if (currentQuery) {
        fetchMovies('search/movie', 1, currentQuery);
    } else {
        fetchMovies(currentEndpoint, currentPage, '', currentGenre);
    }
});

// Event listeners for pagination buttons
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchMovies(currentEndpoint, currentPage, currentQuery, currentGenre);
    }
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    fetchMovies(currentEndpoint, currentPage, currentQuery, currentGenre);
});

// Initialize movies and genres on load
fetchMovies(currentEndpoint, currentPage);
fetchGenres();