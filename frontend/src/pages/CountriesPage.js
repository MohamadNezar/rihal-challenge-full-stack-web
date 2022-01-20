import { useState, useEffect } from "react";
import TableData from "../components/tables/TableData";
import axios from "axios";


function CountriesPage(){

    const [loadedCountries, setLoadedCountries] = useState([]);
    const [cols,setCols] = useState([]); 

    useEffect(() => {
        getCountries();
      },[]);

const getCountries = ()=>{
  axios.get("http://localhost:5000/countries")
    .then((response) => {
      const cols = [];
        for( let val in response.data[0]){
          if(val!=="id"){
            cols.push(val);}
        }
        setCols(cols);
      setLoadedCountries(response.data);
      
    });
}

      const deleteItem = (id)=>{
        axios.delete(`http://localhost:5000/delete-country/${id}`).then(()=> getCountries());
          }


      return (
        <section>
          <h1>All Countries</h1>
          <TableData rows={loadedCountries} onDelete={deleteItem} columns={cols}/>
        </section>
      );

}


export default CountriesPage;
