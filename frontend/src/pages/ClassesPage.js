import axios from "axios";
import { useState, useEffect } from "react";
import TableData from "../components/tables/TableData";


function ClassesPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedClasses, setLoadedClasses] = useState([]);
    const [cols,setCols] = useState([]); 

    useEffect(() => {
       getClasses();
      },[]);

const getClasses = ()=>{
    axios.get("http://localhost:5000/classes")
    .then((response) => {
      const cols = [];
        for( let val in response.data[0]){
          if(val!=="id"){
            cols.push(val);}
        }
        setCols(cols);
        setIsLoading(false);
      setLoadedClasses(response.data);
    });
}

      const deleteItem = (id)=>{
        axios.delete(`http://localhost:5000/delete-class/${id}`).then(()=> getClasses());
          }
          
      return (
        <section>
          <h1>All Classes</h1>
          <TableData rows={loadedClasses} onDelete={deleteItem} columns={cols}/>
        </section>
      );


}

export default ClassesPage;
