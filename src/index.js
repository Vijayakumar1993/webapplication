import React from 'react';
import ReactDOM from 'react-dom/client';
import CommonRouter from './components/CommonRouter';
import './css/common.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid'> 
      <CommonRouter />
    </div>
  </React.StrictMode>
);

