import { useState } from "react";

const useForm = (initialValues, submit) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        setValues(
            {...values,
            [e.target.name] : e.target.value}
        )
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        submit();
    }

    return {values, handleChange, handleSubmit}
}
 
export default useForm;