import React, { useState } from 'react';
import '../index.css';

const Input = ({taskList, setTaskList}) => {
  const [input, setInput] = useState("");

  const handleAddTask=(e)=>{
    e.preventDefault()
    setTaskList([...taskList, input]);
    setInput
  }

  return (
    <div>
      <form className='flex flex-row items-center gap-3'>
        <input 
          className='border rounded-lg px-2 py-1 text-lg'
          type='text' 
          placeholder='Enter your Todo here...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          className='bg-violet-200 text-white py-2 px-3.5 rounded-lg hover:placeholder-opacity-70'
          onClick={handleAddTask}
          >
            Add
          </button>
      </form>
    </div>
  );
}

export default Input;
