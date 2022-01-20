


import { useState,useEffect } from "react";
import axios from "axios";


function DropDownList(props){
 
    const [selectedItem,selectItem]= useState(props.initialValue);

    const [items, setItems] = useState([]);

props.selected(selectedItem);

useEffect(() => {
    getItems();
  }, []);
const getItems = ()=>{
axios.get(props.api).then(loadedItems=>setItems(loadedItems.data));
}
return(
    <div>
    <label for="select-item">{props.label}</label>
    <br/>
    <select
      id="select-item"
      onChange={val => selectItem(val.target.value)}
    >
      <option value="">---</option>
      {items.map((val) => (
        val["id"]===selectedItem?<option value={val["id"]} selected>{val[props.shownProperty]} </option>:<option value={val["id"]} >{val[props.shownProperty]}</option>
      ))}
    </select></div>); 

}

export default DropDownList;