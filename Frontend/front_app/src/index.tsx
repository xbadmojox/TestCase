import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {NotFoundPage} from './Helpers'
import {PointClient, ClientPoint} from './Components'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/'
                element={
                    <App/>
                  }
                />
              <Route path='/TableClientPoint'
                  element={
                      <ClientPoint/>
                    }
                  />
                <Route path='/TablePointClient'
                  element={
                      <PointClient/>
                    }
                  />
          <Route/>
          <Route path='*'
                element={
                    <NotFoundPage/>
                  }
                 />
        </Routes>
      </Router>
    </Provider>
);

reportWebVitals();
