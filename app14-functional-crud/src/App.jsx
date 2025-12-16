import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StudentForm } from './Components/StudentForm'
import { StudentTable } from './Components/StudentsTable'

function App() {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    email: ""
  })
  const [studentsArray, setStudentsArray] = useState([
    { fname: 'Ram', lname: 'krishna', email: 'ram@gamil.com' },
    { fname: 'murali', lname: 'l', email: 'murali@gmail.com' },
    { fname: 'leela', lname: 'vathi', email: 'leela@gmail.com' }

  ]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const newStundet = { ...student }
    newStundet[e.target.name] = e.target.value;
    setStudent(newStundet)
  }

  const handleSubmit = () => {
    const newStudentsArray = [...studentsArray];
    newStudentsArray.push(student);
    setStudentsArray(newStudentsArray)
    clearForm();
  }
  const clearForm = () => {
    setStudent({
      fname: "",
      lname: "",
      email: ""
    })
  }

  const handleDeleteStudent = (i) => {
    const newStudents = [...studentsArray];
    newStudents.splice(i, 1);
    setStudentsArray(newStudents)
  }

  const handleEditStudent = (i) => {
    setStudent(studentsArray[i]);
    setEditIndex(i)
  }
  const handleUpdateStudent = () => {
    const newStudents = [...studentsArray];
    newStudents[editIndex] = student;
    setStudentsArray(newStudents);
    clearForm();
    setEditIndex(null)

  }
  return (
    <>
      <StudentForm student={student} handleChange={handleChange} handleSubmit={handleSubmit} editIndex={editIndex} handleUpdateStudent={handleUpdateStudent} />
      <hr />
      <StudentTable studentsArray={studentsArray} handleDeleteStudent={handleDeleteStudent} handleEditStudent={handleEditStudent} />
    </>
  )
}

export default App
