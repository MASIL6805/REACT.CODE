import{ useState } from 'react';

export default function CommentForm() {

    let [formData, setFormData] = useState({
        username: '',
        remarks: '',
        rating: 5
        });

        let handleInputChange = (event) => {
            setFormData((currData) => {
                return {
                    ...currData,
                    [event.target.name]: event.target.value // Update the specific field in formData
                }
            });
        }

        let handleSubmit = (event) => { 
            console.log(formData); // Log the form data to the console
            event.preventDefault();
            setFormData({
                username: '',
                remarks: '',
                rating: 5
            });
        }


    return (
        <div>
            <h3>Give a Comment!</h3>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input placeholder="username"  type="text" value={formData.username} onChange={handleInputChange} name='username'/>
                
                <br />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} placeholder='Add Few Remarks' onChange={handleInputChange} name='remarks'>Remarks:</textarea>

                <br />
                <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" min={1} max={5} onChange={handleInputChange} name='rating'/>

                <br />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}