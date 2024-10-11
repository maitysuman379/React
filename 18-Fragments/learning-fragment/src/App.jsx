import './App.css'
import Container from './componentes/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './componentes/FoodItems';
import ErrorMessage from './componentes/ErrorMessage';
import FoodInput from './componentes/FoodInput';

function App() {
  let foodItems = ['dal', 'ruti', 'salad', 'milk', 'green vegitable', 'ghee', 'suman'];
  // let foodItems = [];
  return (
    <>
      <Container>
        <h1>Healty Food</h1>
        <ErrorMessage foodItems={foodItems} />
        <FoodInput/>
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
