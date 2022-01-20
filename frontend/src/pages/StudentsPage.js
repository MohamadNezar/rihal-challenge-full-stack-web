
import { useState, useEffect } from "react";
import TableData from "../components/tables/TableData";
import axios from "axios";

function StudentsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedStudents, setLoadedStudents] = useState([]);
    const [cols,setCols] = useState([]); 
    useEffect(() => {
              getStudents();
      },[]);
    const  getStudents = ()=>{
      axios.get("http://localhost:5000/students")
      .then((response) => {
        const cols = [];
        for( let val in response.data[0]){
          if(val!=="id"&&val!=="classId"&&val!=="countryId"){
            cols.push(val);}
        }
       setCols(cols);
        setLoadedStudents(response.data);
        setIsLoading(false);
      });
    }


  const deleteItem = (id)=>{
axios.delete(`http://localhost:5000/delete-student/${id}`).then(()=> getStudents());
  };
    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
      return (
        <section>
          <h1>All Students</h1>
          <TableData rows={loadedStudents} onDelete={deleteItem} columns={cols}/>
        </section>
      );
}


export default StudentsPage;

            
