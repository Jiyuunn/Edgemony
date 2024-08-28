// src/pages/api/books.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '../../types';

let books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Novel about racism.' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    const newBook: Book = { id: Date.now(), ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
  } else {
    res.status(405).end();
  }
}
