import { useState } from "react";

function Input() {
    const [regex, setRegex] = useState();

    const handdleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setRegex(value);
    }

    
    return (
        <input value={regex} onChange={handdleChange} placeholder="Enter your value" />
    )
}
export default Input;