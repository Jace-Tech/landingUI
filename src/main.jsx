import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import FontContextProvider from './contexts/fontContext'

import "./global/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <FontContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </FontContextProvider>
        </ChakraProvider>
    </React.StrictMode>
)
