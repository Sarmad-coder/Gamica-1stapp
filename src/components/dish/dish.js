
export default function Dish({abc, city, names}){

    return <tr>
        <td>{city}</td>
        <td>{names[0]}</td>
    <td>{abc.name}</td>
    <td>{abc.price}</td>
    <td><input onChange={(evt)=>{
       abc.orderHui = evt.target.checked;
      //  console.log(dishes);
      //  setDishes([...dishes]);
    }} type="checkbox" /></td>
  </tr>
  
  }