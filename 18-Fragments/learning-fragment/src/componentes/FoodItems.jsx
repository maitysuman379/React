import Item from "./Item";

const FoodItems = ({foodItems}) => {
  const handelClick = (item) =>{
    console.log(`${item}`);
  }
  return <ul className="list-group">
    {foodItems.map(item => <Item key={item} items={item} handelClick={()=>{handelClick(item)}}/>)}
  </ul>
}

export default FoodItems;