/* @refresh reload */
import { render } from 'solid-js/web'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import 'simplebar/dist/simplebar.css';
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)
