
import { useCallback, useState } from 'react'
import './App.css'
import Board from './components/Board'
import TaskForm from './components/TaskForm'
import EditTaskModal from './components/EditTaskModal'
import SearchBar from './components/SearchBar'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [search, setSearch] = useState("")

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
      <TaskForm />
      <SearchBar 
        search={search}
        setSearch={setSearch}
      />
      <Board 
        handleOpenModal={handleOpenModal}
        search={search}
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
