import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <button type="button" class="btn btn-outline-info mec-2">Info</button>
    <button type="button" class="btn btn-outline-primary mec-2">Primary</button>
<button type="button" class="btn btn-outline-secondary mec-2">Secondary</button>
<button type="button" class="btn btn-outline-success mec-2">Success</button>
<button type="button" class="btn btn-outline-danger mec-2">Danger</button>
<button type="button" class="btn btn-outline-warning mec-2">Warning</button>
<button type="button" class="btn btn-outline-info mec-2">Info</button>
<button type="button" class="btn btn-outline-light mec-2">Light</button>
<button type="button" class="btn btn-outline-dark mec-2">Dark</button>
  </div>
}

export default App
