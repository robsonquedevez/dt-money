import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
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
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
