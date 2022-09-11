import React from 'react'
import { createRoot } from 'react-dom/client'
import { CashOrTime } from './component'

const cashOrTime = <CashOrTime />
const root = createRoot(document.querySelector('#here'))

root.render(cashOrTime)
