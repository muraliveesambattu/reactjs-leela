import { useEffect, useState } from "react"

export const User = () => {
    const [userValues, setUserValues] = useState({
        fname: "",
        lname: ""
    })

    const handleChange = (e) => {
        const newUserValues = { ...userValues };
        newUserValues[e.target.name] = e.target.value;
        setUserValues(newUserValues)
        // if (e.target.value.length >= 8 ) {
        //     document.querySelector("button").removeAttribute("disabled", true)
        // } else {
        //     document.querySelector("button").setAttribute("disabled", true)
        // }
    }

    useEffect(() => {
        if (userValues.fname.length >= 8 && userValues.lname.length >= 6) {
            document.querySelector("button").removeAttribute("disabled", true)
        } else {
            document.querySelector("button").setAttribute("disabled", true)
        }
    }, [userValues])
    return <div>
        <h2>Welcome to Form Validations !!</h2>
        <form>
            <label htmlFor="">First Name :</label>
            <input type="text" name="fname" value={userValues.fname} onChange={handleChange} /> <br />
            <label htmlFor="">Last Name :</label>
            <input type="text" name="lname" value={userValues.lname} onChange={handleChange} /> <br />

            <button disabled>Add User</button>
        </form>
    </div>
}