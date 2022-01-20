import { useLocation } from "react-router-dom";

function EditStudentPage (){
let query = useLocation();
console.log(query.search.substring(4));
return (<div>Now showing post {query.search}</div>);
}

export default EditStudentPage;