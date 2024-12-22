import React from 'react'

const Board = ({task, index, taskList, setTaskList}) => {

  const handleDelete=()=>{
    setTaskList(currentTask=>currentTask.filter((_, i)=> i!=index));
  }
  
  return (
    <div className='max-w-lg flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-2'>
      <p>{task}</p>
      <button 
      className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4'
      onClick={handleDelete}
      >
        delete
      </button>
    </div>
  )
}

export default Board;
