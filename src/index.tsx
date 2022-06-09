import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

  createServer({

    models: {
      transection: Model,
    },

    seeds(server) {
      server.db.loadData({
        transections: [
          {
            id: 1,
            title:'Freelance de website',
            type: 'deposit',
            category:'Dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title:'Aluguel',
            type: 'withdraw',
            category:'Casa',
            amount:1100,
            createdAt: new Date('2021-02-14 11:00:00')
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transection', () => {
        return this.schema.all('transection')
      })

      this.post('/transection', (schema, request) =>{

        const data = JSON.parse(request.requestBody)

        return schema.create('transection', data)

      })
    }
  })


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

