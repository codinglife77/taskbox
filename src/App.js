import logo from "./logo.svg";
import "./App.css";
import Task from "./Task";
function App() {
  return (
    <div className="App">
      <Task
        task={{
          id: "1",
          title: "Test Task",
          state: "TASK_PINNED",
          updatedAt: new Date(2021, 0, 1, 9, 0),
        }}
      />
    </div>
  );
}

export default App;
