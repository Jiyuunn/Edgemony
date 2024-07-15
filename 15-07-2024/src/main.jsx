import React from 'react';
import ReactDOM from 'react-dom';
import PostComponent from './PostComponent';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h1>Visualizzatore di Post</h1>
      <PostComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
