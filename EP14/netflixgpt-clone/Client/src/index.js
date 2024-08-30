import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{ router } from './App';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import AppStore from './Store/AppStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={AppStore}>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
);

