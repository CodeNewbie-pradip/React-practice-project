import { useState } from "react";
import "./App.css";
import Board from "./Components/Board.jsx";
import Input from "./Components/Input.jsx";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-3">
        <h1 className="text-xl font-semibold">To-Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          {taskList.map((task, index) => (
              <Board 
              key={index}
              index={index}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              />
          ))}
        </div>
    </>
  );
}

export default App;
