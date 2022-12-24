import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import SidebarModalApp from './SidebarModalApp'
// import './index.css'
import { AppProvider } from './components/sidebarModalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> =======> navbar*/}
    <AppProvider>
      <SidebarModalApp /> {/*sidebar*/}
    </AppProvider>
  </React.StrictMode>
)
