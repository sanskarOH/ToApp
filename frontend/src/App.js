import { ToDo } from "./components/ToDo";


function App() {
  return (
    <div className="ToDo">
      <div className="container">
        <h1>To Do List App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDo..." />
          <div className="add">Add</div>
        </div>
        <div className="list">
          <br></br>
          <ToDo text="Hi.."/>
          <br></br>
          <ToDo text="Hi.."/>
          <br></br>
          <ToDo text="Hi.."/>
        </div>
      </div>
    </div>

  );
}

export default App;
