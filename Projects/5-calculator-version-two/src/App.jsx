import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {

  let [calVal, setCalVal] = useState("");

  return (
    <div className={`${styles.calculator}`}>
      <Display calVal={calVal}/>
      <ButtonsContainer/>
    </div>
  )
}

export default App
