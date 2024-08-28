// src/app/page.tsx
import { Book } from '../types';
import { fetchBooks } from '../services/bookService';
import BookList from '../components/BookList';

const HomePage = async () => {
  const books: Book[] = await fetchBooks();

  return (
    <div>
      <h1>Lista dei Libri</h1>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
