import { useState } from 'react'
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {routers} from './app/Router/routers.jsx';
import {store} from './app/store.js';
import './App.css';

function App() {
  

  return (
    <>
      <Provider store = {store}>
          <RouterProvider router={routers} />
      </Provider>
      
    </>
  )
}

export default App
