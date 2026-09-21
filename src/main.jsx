import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Composants Vercel
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
                {/* Ajout des composants de suivi Vercel */}
                <Analytics />
                <SpeedInsights />
            </BrowserRouter>
        </React.StrictMode>,
    )
}