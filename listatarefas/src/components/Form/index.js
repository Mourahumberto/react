// Form
import {FaPlus} from 'react-icons/fa'
import React from "react";
import './Form.css'
export default function Form({handleChange, handleSubmit, novaTarefa}){
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
        <input
         onChange={handleChange}
         type="text"
         value={novaTarefa} />
        <button type="submit">
            <FaPlus />
        </button>
        </form>
    );
}