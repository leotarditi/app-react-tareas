import React, { useState } from "react";
import '../stylesheets/TareaForm.css';
import { v4 as uuidv4 } from 'uuid'

function TareaForm(props) {

  const [input, setInput] = useState();

  const manageChange = e => {
    setInput(e.target.value);
  }

  const manageSubmit = e => {
    e.preventDefault();
    
    const tareaNew = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(tareaNew);
  }

  return (
    <form 
      className='tarea-form'
      onSubmit={manageSubmit}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='text'
        onChange={manageChange} />
      <button className='tarea-button'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaForm;