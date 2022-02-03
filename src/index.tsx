import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Website developed',
          amount: 12000.00,
          type: 'deposit',
          category: 'Development',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Rent',
          amount: 1120.00,
          type: 'withdraw',
          category: 'Home',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Coffe',
          amount: 3.50,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
