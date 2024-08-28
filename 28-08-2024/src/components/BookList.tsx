// src/components/BookList.tsx
import { Book } from '../types';

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
