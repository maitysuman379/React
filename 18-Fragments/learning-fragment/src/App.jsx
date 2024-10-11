import './App.css';
import Container from './componentes/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './componentes/FoodItems';
import ErrorMessage from './componentes/ErrorMessage';
import FoodInput from './componentes/FoodInput';
import { useState } from 'react';

function App() {

  let [foodItems, setFoodItems] = useState([]);

  const handleOnKeyDown = (event) =>{
    if(event.key === "Enter"){
      let data = event.target.value;  
      setFoodItems([...foodItems,data]);
    }
  }

  return (
    <>
      <Container>
        <h1>Healty Food</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown}/>
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and welth and well being
        </p>
      </Container>
    </>
  );
};

export default App
