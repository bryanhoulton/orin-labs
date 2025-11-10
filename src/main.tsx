import './index.css';
import './styles/prism-custom.css';
import 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
