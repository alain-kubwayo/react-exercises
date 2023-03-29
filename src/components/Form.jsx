import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Hello ${formData.firstName} ${formData.lastName}!`);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return ( 
        <form className="flex flex-col max-w-sm pt-10 mx-auto gap-y-6" onSubmit={handleSubmit}>
            <label>
                <input 
                    type="text"
                    placeholder="First Name"
                    className="w-full p-2 border-2 outline-none border-sky-900"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 border-2 outline-none border-sky-900"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </label>
            <button className="px-4 py-2 font-bold text-white uppercase bg-red-800">Greet Me</button>
        </form>
    );
}
 
export default Form;