import React from 'react'
import { MoralisProvider } from 'react-moralis'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const SERVERID = import.meta.env.VITE_MORALIS_SERVER_ID
const SERVERURL = import.meta.env.VITE_MORALIS_SERVER_URL


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={SERVERID} serverUrl={SERVERURL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
