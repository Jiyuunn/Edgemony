import React from 'react';

const Contatti = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Contattaci</h1>
      <form className="mt-8 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Messaggio</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Invia
        </button>
      </form>
    </div>
  );
};

export default Contatti;
