// src/services/bookService.ts
import axios from 'axios';
import { Book } from '../types';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get('pages/api/books');
  return response.data;
};
