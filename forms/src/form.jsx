import{ useState } from 'react';

export default function Form() {
    // State variables to hold the values of multiple input fields
    let [formData, setFormData] = useState({
        FullName: '',
        UserName: '',
        Password: ''
    });


    // State variables to hold the values of the input fields individualy
        // let [FullName, setFullName] = useState('');
        // let [UserName, setUserName] = useState('');

    // Function to handle changes in the input fields in fullname
    // let handleChange = (event) => {
    //     setFullName(event.target.value);
    // }


    // // Function to handle changes in the input fields in username
    // let handleUsername = (event) => {
    //     setUserName(event.target.value);
    // }


    // Function to handle changes in multiple input fields using formData
    let handleInputChange = (event) => {
        let fieldName = event.target.name; // Get the name of the input field
        let fieldValue = event.target.value; // Get the value of the input field


        setFormData((currData)=>{

            currData[fieldName] = fieldValue; // Update the specific field in formData
            
            return {

                ...currData// Return the updated formData object
                
            }
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Log the form data to the console
        setFormData({
            FullName: '',
            UserName: '',
            Password: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName</label>
            <input placeholder="enter Username" type='text' value={formData.UserName} onChange={handleInputChange} id='username' name='UserName'/>
            <br />
            <br />
            <label htmlFor="fullname">FullName</label>
            <input placeholder="enter full name" type='text' value={formData.FullName} onChange={handleInputChange} id='fullname' name='FullName'/>
            <br />
            <br />
            <label htmlFor="Password">Password</label>
            <input placeholder="enter Password" type='text' value={formData.Password} onChange={handleInputChange} id='password' name='Password'/>


            <button>Submitt</button>
        </form>
    );
}