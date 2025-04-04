import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoomifyApp } from './RoomifyApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RoomifyApp />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
