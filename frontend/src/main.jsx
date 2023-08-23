import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RecoilRoot>,
)
