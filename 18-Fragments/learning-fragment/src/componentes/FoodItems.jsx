import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {

  let [activeItems, setActiveItems] = useState([]);

  const handelClick = (item, event) => {
    console.log(`${item} is bought`);
    let newItem = item;
    setActiveItems([...activeItems, newItem]);
  }

  return <ul className="list-group">
    {foodItems.map(item =>
      <Item key={item} bought={activeItems.includes(item)} items={item} handelClick={(event) => { handelClick(item,event) }} />
    )}
  </ul>
}

export default FoodItems;