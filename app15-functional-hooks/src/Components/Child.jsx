import { useContext } from "react"
import { UserContext } from "../UserContext"

export const Child = ({  }) => {
    const count = useContext(UserContext);
    return <>
        <h2>Value from App is -- {count}</h2>
    </>


}