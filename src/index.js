import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from "react-router-dom";
import { Lenguage } from './contextLenguaje'


ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
        <BrowserRouter>
          <Lenguage>
              <App />
          </Lenguage>
        </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
