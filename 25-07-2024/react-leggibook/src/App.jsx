import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getBookList } from "./api/bookClient";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getBooks = async () => {
    try {
      const data = await getBookList();
      setBookList(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (isLoading) return <p>{labels.isLoading}</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <button onClick={() => navigate(+1)}>avanti</button>
          <div className="p-4 ">
            <h1 className="">{labels.bookList}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <h2>{labels.filterBookByTitle}</h2>
            <input
              className="border-slate-400 border-2 p-2"
              type="text"
              value={filter}
              placeholder={labels.insertBookTitle}
              onChange={handleChange}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.bookTableTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.bookTableAuthor}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.bookTableGenre}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.bookTableISBN}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookList
                  .filter((book) => book.title.toLowerCase().includes(filter))
                  .map((book) => {
                    return (
                      <tr key={book.id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {book.title}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {book.author}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {book.genre}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {book.isbn}
                        </td>
                        <td className="whitespace-nowrap flex gap-2 px-4 py-2">
                          <Link
                            to={`/books/${book.id}`}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            {labels.bookTableBtnDetail}
                          </Link>
                          <Link
                            to={`/edit/${book.id}`}
                            className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;