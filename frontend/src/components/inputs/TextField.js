import { useState } from "react";


function TextField(props){
    const [textValue,setTextValue] = useState(props.initialValue);
   
    props.onChange(textValue);
  return (<div>
  <label for="text-field"> {props.label}</label>
  <br/>
  <input type="text" id="text-field" value={textValue} onChange={val => setTextValue(val.target.value)}/>
  </div>);
  }

  export default TextField;