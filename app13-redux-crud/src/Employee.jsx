import { useDispatch, useSelector } from "react-redux"
import { getEmployeesFromServer } from "./store/emploeeSlice";

export const Employee = () => {
    const dispatch = useDispatch();
    const employeesData = useSelector((state) => state.employees.employeesDetails);
    console.log(employeesData)
    const handleGetEmployees = () => {
        dispatch(getEmployeesFromServer())
    }
    return <>
        <h2>Welcome to Employees</h2>
        <button onClick={handleGetEmployees}>Get Employees</button>
    </>
}