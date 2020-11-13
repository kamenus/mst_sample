import React from 'react';
import ReactDOM from 'react-dom';
import TodoProvider from './stores/TodoStoreContext';
import './index.scss';
import App from './components/App';


ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
