import { useState } from 'react';
import '../../styles/index.css';
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e)=> {
      if (e.target.value.length > 0)
      {
       setErrorMessage('');
     } 
      else if (e.target.name === "name" && !e.target.value.length)
       {
        setErrorMessage('Name is required');
      } 
      else if (e.target.name === "email" && !e.target.value.length)
      {
        setErrorMessage('email is required');
      }
      else if (e.target.name === "message" && !e.target.value.length)
      {
        setErrorMessage('Message is required');
      }
      else {
        setErrorMessage('');
      }
    }
  
  const handleSubmit = (e) =>{
    const userInput = {name, email, message};

    e.preventDefault();
    if (!validateEmail(userInput.email)) {
       setErrorMessage('Email is invalid');
       return;
     
        }
  

   
    console.log(userInput.name);
    console.log(userInput.email);
    console.log(userInput.message);
    alert("Thank you " + userInput.name + " for your message!");
    
  }

  return (
    <div className="create">
        <div className="form-content">
        <h2>Leave your name, email and message:</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={name}
            onBlur={handleChange}       
            
           onChange={(e)=> setName(e.target.value)}
            
            />
             <label>Email:</label>
            <input
            type="text"
            value={email}
            name="email"
            onBlur={handleChange}      
            onChange={(e)=> setEmail(e.target.value)}/>
             <label>Message:</label>
            <textarea   value={message}
            name="message"
             onBlur={handleChange} 
             onChange={(e)=> setMessage(e.target.value)}
             ></textarea>
            <button>Submit</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        <p>{name}</p>
        <p>{email}</p>
        <p>{message}</p>
        </div>
        
        

       
       



    </div>
  )
}

export default Form;
