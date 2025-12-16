export const StudentTable = ({ studentsArray,handleDeleteStudent,handleEditStudent }) => {
    return <>
        <h2>Welcome to Students Table </h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {studentsArray.map((std, i) => {
                    return <tr key={i}>
                        <td>{std.fname}</td>
                        <td>{std.lname}</td>
                        <td>{std.email}</td>
                        <td>
                            <button onClick={()=>{handleEditStudent(i)}}>Edit Student</button>
                        </td>
                        <td>
                            <button onClick={()=>{handleDeleteStudent(i)}}>Delete Student</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}