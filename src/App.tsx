import { useTaskList } from "#query/task";

function App() {
  const taskList = useTaskList();

  return (
    <main>
      {taskList.map((task) => (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
