import { useEffect, useState } from "react";
import { ToDo } from "./components/ToDo";
import { getAllToDo } from "./utils/HandleApi";


function App() {

  const [toDo , setToDo] = useState([])
  useEffect(()=>{
    getAllToDo(setToDo)
    
  },[])
  return (
    <div className="ToDo">
      <div className="container">
        <h1>To Do List App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDo..." />
          <button className="add">Add</button>
        </div>
        <div className="list">
          {toDo.map((item)=><ToDo key={item._id} text={item.text}/>)}
        </div>
      </div>
    </div>

  );
}

export default App;
