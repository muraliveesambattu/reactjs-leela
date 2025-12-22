import { useEffect, useState } from "react"

export const Users = () => {
    const [count, setCount] = useState(0)
    const getDataFromServer = () => {
        console.log("getDataFromServer Called !!")
    }

    // What is Syntex for Use Effect ?
    // We need to pass a Callback function and a empty [] ArrayBrackets
    useEffect(() => {
        getDataFromServer()
    }, [])
    return <>
        <button onClick={() => { setCount(count + 1) }}>Change Count - {count}</button>
        <h2>Welcome to Users Component !!!</h2>
    </>
}