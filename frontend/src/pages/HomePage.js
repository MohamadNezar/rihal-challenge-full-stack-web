import axios from "axios";
import { useState, useEffect } from "react";
import TableOfStatistics from "../components/tables/TableOfStatistics";
function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [studentsPerClass, setstudentsPerClass] = useState([]);
  const [studentsPerCountry, setstudentsPerCountry] = useState([]);
  const [avgAgeOfStudents, setavgAgeOfStudents] = useState(null);
  useEffect(() => {
    getStatistics();
  }, []);
  const getStatistics = () => {
    axios
      .get("http://localhost:5000/studentsperclass")
      .then((studentsPerClass) => {
        axios
          .get("http://localhost:5000/studentspercountry")
          .then((studentsPerCountry) => {
            axios
              .get("http://localhost:5000/avgageofstudents")
              .then((avgAgeOfStudents) => {
                setstudentsPerClass(studentsPerClass.data);
                setstudentsPerCountry(studentsPerCountry.data);
                setavgAgeOfStudents(avgAgeOfStudents.data);
                setLoading(false);
              })
              .catch();
          })
          .catch();
      })
      .catch();
  };

if(isLoading)
return (<h1>Loading...</h1>)

  return (
    <div>
<h2>Average age of students: {avgAgeOfStudents['0']['avg']}</h2><br/>
<TableOfStatistics col1Title='Class' col2Title='#Of Students' data={studentsPerClass}/><br/><br/>
<TableOfStatistics col1Title='Country' col2Title='#Of Students' data={studentsPerCountry}/>
    </div>
  );
}

export default HomePage;
