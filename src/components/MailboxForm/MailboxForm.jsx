import { useState } from 'react'; 
import { useNavigate } from 'react-router'; 

const initialState = {
    boxOwner: '', 
    boxSize: 'Small',
}; 

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState); 
    const navigate = useNavigate(); 

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        props.addBox(formData);
        setFormData(initialState); 
        navigate('/mailboxes'); 
    }
    
    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value }); 
    }

    return (
        <>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter box owner: </label>
                <input 
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    placeholder="Box Owner Name"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />

                <label htmlFor="boxSize">Select box size: </label>
                <select 
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    ) 
}; 

export default MailboxForm; 