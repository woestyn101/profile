import { useState } from 'react';
import '../../styles/index.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  

  return (
    <div className="create">
        <div className="form-content">
        <h2>Leave your name, email and message:</h2>
        <form>
            <label>Name:</label>
            <input
            type="text"/>
             <label>Email:</label>
            <input
            type="text"/>
             <label>Message:</label>
            <textarea></textarea>
            <button>Submit</button>

        </form>
        </div>



    </div>
  )
}

export default Form;
