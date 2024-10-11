import './App.css'
import Container from './componentes/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './componentes/FoodItems';
import ErrorMessage from './componentes/ErrorMessage';
import FoodInput from './componentes/FoodInput';

function App() {
  let foodItems = ['dal', 'ruti', 'salad', 'milk', 'green vegitable', 'ghee', 'biscuit'];
  // let foodItems = [];
  let data = '';
  const handleOnChange = (event) =>{
    data = event.target.value;
    console.log(data);
  }
  return (
    <>
      <Container>
        <h1>Healty Food</h1>
        <ErrorMessage foodItems={foodItems} />
        <FoodInput handleOnChange={handleOnChange}/>
        <p>{data}</p>
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
