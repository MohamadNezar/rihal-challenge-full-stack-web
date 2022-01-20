import axios from "axios";
import qs from "qs";
import { useLocation , useNavigate } from "react-router-dom";
import TextField from "../components/inputs/TextField";
import DatePicker from "../components/inputs/DatePicker";
import DropDownList from "../components/inputs/DropDownList";


function AddStudentPage() {
  const query = useLocation();
  let navigate = useNavigate();
  const student = query.state.item;
  var studentName;
  var studentBirthday;
  var studentClassId;
  var studentCountryId;
  var setName = (value) => (studentName = value);
  var setBirthday = (value) => (studentBirthday = value);
  var setClassId = (value) => (studentClassId = value);
  var setCountryId = (value) => (studentCountryId = value);
  const updateStudent = () => {
    const body = qs.stringify({
      id: student?.id,
      classId: studentClassId,
      countryId: studentCountryId,
      name: studentName,
      dateOfBirth: studentBirthday,
    });
    axios
      .post("http://localhost:5000/update-student", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => navigate(-1))
      .catch((val) => {
        alert(val);
      });
  };

  const addStudent = () => {
    const body = qs.stringify({
      classId: studentClassId,
      countryId: studentCountryId,
      name: studentName,
      dateOfBirth: studentBirthday,
    });
    axios
      .post("http://localhost:5000/add-student", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(() => navigate(-1))
      .catch((val) =>{
      alert(val.response.data)});
  };

  return (
    <section>
      {query.state.toEdit ? (
        <h1>Edit Student Info</h1>
      ) : (
        <h1>Add New Student </h1>
      )}
      <br />
      <DropDownList
        initialValue={student?.countryId}
        selected={setCountryId}
        label="Choose a Country"
        api="http://localhost:5000/countries"
        shownProperty="Name"
      />
      <br />
      <DropDownList
        initialValue={student?.classId}
        selected={setClassId}
        label="Choose a Class"
        api="http://localhost:5000/classes"
        shownProperty="Name"
      />
      <br />
      <DatePicker
        initialDate={
          student != null
            ? student["Date of Birth"].toString()
            : null
        }
        selected={setBirthday}
      />
      <br />
      <TextField
        initialValue={student?.Name}
        onChange={setName}
        label="Enter your Name"
      />
      <br />
      <input
        type="submit"
        value={query.state.toEdit ? "Update" : "Submit"}
        onClick={() =>
          query.state.toEdit
              ? updateStudent()
              : addStudent()
        }
      />
    </section>
  );
}

export default AddStudentPage;
