import { useState } from "react"
import { ACTIONS } from "../reducers/actions"
import useTask from "../context/useTask"
import './TaskForm.css'


function TaskForm() {
  const [title, setTitle] = useState("")
  const date = new Date().toISOString().split("T") [0]

  const { dispatch } = useTask()

  function handleAddTask() {
    if (!title.trim()) return

    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: Date.now(),
        title,
        status: "todo",
        date: date,
        priority: "medium"
      }
    })

    setTitle("")
  }

  return(
    <>
      <div className="taskform-container">
          <h2 className="title">KANBAN</h2>
        <input 
          className="add-input"
          type="text"
          placeholder="Add Task here"
          value={title} 
          onChange={(e) => setTitle(e.target.value) }
        />

        <button
        className="add-button"
         onClick={handleAddTask}
        >Add</button>
      </div>
    </>
  )
}

export default TaskForm