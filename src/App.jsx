
import { useReducer, useState } from 'react'
import './App.css'
import Board from './components/Board'
import TaskForm from './components/TaskForm'
import { initialState, taskReducer } from './reducers/taskReducer'
import EditTaskModal from './components/EditTaskModal'

function App() {
 
  const [state, dispatch] = useReducer(taskReducer, initialState)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  function handleOpenModal(task) {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setEditingTask(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <TaskForm 
        dispatch={dispatch}
      />
      <Board 
        tasks={state.tasks}
        dispatch={dispatch}
        handleOpenModal={handleOpenModal}
      />
      {isModalOpen && 
        <EditTaskModal 
        editingTask={editingTask}
        handleCloseModal={handleCloseModal}
      />
      }
      
    </>
  )
}

export default App
