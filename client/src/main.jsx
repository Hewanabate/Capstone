import { render } from 'preact'
import { App } from './app.jsx'

import './index.css'

import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

render(
<BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
</BrowserRouter>, document.getElementById('app'))
