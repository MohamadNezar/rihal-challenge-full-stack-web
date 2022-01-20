import { useState } from "react";



function DatePicker(props){
    const [date,setDate] = useState(formatDate(props.initialDate));
    props.selected(date);
  return (<div>
    <label for="date-picker">Enter your birth of date:</label>
    <br/>
    <input
    type="date"
    value={date}
    id="date-picker"
    min="1990-01-01" required={true}
    max="2011-3-15" 
    onChange={val => 
        setDate(val.target.value)}
  /></div>);
  
  }

  function formatDate(value){
   let formatedDate =null;
    if(value!=null){
        let date= value.toString();
        formatedDate=date.substring(6);
        formatedDate+='-';
        formatedDate += date.substring(0,2);
        formatedDate+='-';
        formatedDate += date.substring(3,5);
      }
return formatedDate;
  }
  
  export default DatePicker;