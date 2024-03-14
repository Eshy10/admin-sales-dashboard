import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Paths from './Router';
import './index.scss';
import StoreProvider from './storeProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
<StoreProvider>
<React.StrictMode>
    <RouterProvider router={Paths()} />
  </React.StrictMode>
</StoreProvider>,
)
