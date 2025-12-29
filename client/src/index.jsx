import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="679393911042-f7fs9d5f325t7ce8qfpr3fn46g0c5nfq.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
