import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {

  let [calVal, setCalVal] = useState("");

  const onClick = (btnVal) =>{
    if(btnVal === "C"){
      calVal = '';
      setCalVal(calVal);
    }else if(btnVal === "="){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newVal = calVal + btnVal;
      setCalVal(newVal);
    };
  };

  return (
    <div className={`${styles.calculator}`}>
      <Display calVal={calVal}/>
      <ButtonsContainer onClick={onClick}/>
    </div>
  )
}

export default App
