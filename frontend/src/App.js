import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import ClassesPage from "./pages/ClassesPage";
import CountriesPage from "./pages/CountriesPage";
import AddStudentPage from "./pages/AddStudentPage";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/students/add"  element={<AddStudentPage/>}/>
          <Route path="/students/edit" element={<AddStudentPage/>} />
          <Route path="/countries/add" element={<AddItemPage api="http://localhost:5000/add-country" label="Enter a country name" title="Add New Country"/>}/>
          <Route path="/classes/add" element={<AddItemPage api="http://localhost:5000/add-class" label="Enter a class name" title="Add New Class"/>}/>
          <Route path="/countries/edit" element={<AddItemPage api="http://localhost:5000/update-country" label="Enter a country name" title="Update Country Name"/>}/>
          <Route path="/classes/edit" element={<AddItemPage api="http://localhost:5000/update-class" label="Enter a class name" title="Update Class Name"/>}/>          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
