import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './componenets/index'
import './assets/styles'

const root = createRoot(document.getElementById('root'))

root.render(<App />)
