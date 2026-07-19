
import { useReducer } from 'react'
import './App.css'
import Board from './components/Board'
import TaskForm from './components/TaskForm'
import { initialState, taskReducer } from './reducers/taskReducer'

function App() {
 
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <>
      <TaskForm />
      <Board />
    </>
  )
}

export default App
