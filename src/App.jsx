
import { useCallback, useState } from 'react'
import './App.css'
import Board from './components/Board'
import TaskForm from './components/TaskForm'
import EditTaskModal from './components/EditTaskModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const handleOpenModal = useCallback((task) => 
    {setEditingTask(task)
    setIsModalOpen(true)}, 
    [])
    
  

  function handleCloseModal() {
    setEditingTask(null)
    setIsModalOpen(false)
  }


  return (
    <>
      <TaskForm 
      />
      <Board 
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
