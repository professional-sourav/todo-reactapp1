import Todos from "./components/Todos"
import NewTodo from './components/NewTodo';

function App() {

  return (    
    <div className="flex justify-center flex-col items-center">
      <NewTodo />
      <Todos />
    </div>
  )
}

export default App
