import { useEffect, useState } from "react"

export const Users = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([])
    const getDataFromServer = () => {
        console.log("getDataFromServer Called !!")
    }

    // What is Syntex for Use Effect ?
    // We need to pass a Callback function and a empty [] ArrayBrackets
    useEffect(() => {
        getDataFromServer()
    }, [count])

    const changeCount = () => {
        setCount(count + 1)
    }
    return <>
        <button onClick={() => { changeCount() }}>Change Count - {count}</button>
        <h2>Welcome to Users Component !!!</h2>
    </>
}