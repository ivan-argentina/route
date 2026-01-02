import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirebaseAppProvider } from 'reactfire';
import App from './App.jsx'
import { firebaseConfig } from './config/Firebase.js';
import FirebaseService from './config/Firebase-Service.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
      <FirebaseService>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseService>
    </FirebaseAppProvider>
  </StrictMode>,
)
