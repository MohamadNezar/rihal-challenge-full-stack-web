import axios from "axios";
import TextField from "../components/inputs/TextField";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";





function AddItemPage(props){
  const   query = useLocation();
  const item = query.state.item;
    let navigate = useNavigate();
    var textValue;
    var setValue = (value) => (textValue = value);

const onSubmit=()=>{
const body = qs.stringify({name:textValue,id:item?.id});
axios
.post(props.api, body, {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
}).then(val=>navigate(-1)).catch(val=>alert(val.response.data));
}

    return (<div>
<h1>{props.title}</h1>
<br/>
<TextField initialValue={item?.Name} label={props.label} onChange={setValue}/>
<br/>
<input type="submit" value={query.state.toEdit ? "Update" : "Submit"} onClick={onSubmit}/>
    </div>);
}


export default AddItemPage;