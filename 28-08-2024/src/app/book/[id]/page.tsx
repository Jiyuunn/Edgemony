// src/app/book/[id]/page.tsx
import { fetchBooks } from '../../../services/bookService';
import { Book } from '../../../types';

const BookDetail = async ({ params }: { params: { id: string } }) => {
  const books: Book[] = await fetchBooks();
  const book = books.find((b) => b.id.toString() === params.id);

  if (!book) {
    return <div>Libro non trovato</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
