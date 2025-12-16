export const StudentForm = ({ student, handleChange, handleSubmit, editIndex, handleUpdateStudent }) => {
    console.log(student)
    return <>
        <h2>Welcome to Students Form !!</h2>

        <form action="">
            <label htmlFor="">First Name </label>
            <input type="text" name="fname" value={student.fname} onChange={handleChange} /> <br />
            <label htmlFor="">Last Name </label>
            <input type="text" name="lname" value={student.lname} onChange={handleChange} /> <br />
            <label htmlFor="">Email  </label>
            <input type="text" name="email" value={student.email} onChange={handleChange} /> <br /> <br />
            {editIndex == null ? <button type="button" onClick={handleSubmit}>Add Student</button> : <button type="button" onClick={handleUpdateStudent}>UPdate Student</button>}

        </form>
    </>
}