import { useState } from "react"
import { ACTIONS } from "../reducers/actions"
import useTask from "../context/useTask"


function TaskForm() {
  const [title, setTitle] = useState("")
  const date = new Date().toISOString().split("T") [0]

  const { dispatch } = useTask()

  const value = useTask()
  console.log(value)

  function handleAddTask() {
    if (!title.trim()) return

    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: Date.now(),
        title,
        status: "todo",
        date: date
      }
    })

    setTitle("")
  }

  return(
    <>
      <div>
        <input 
          type="text"
          placeholder="Add Task here"
          value={title} 
          onChange={(e) => setTitle(e.target.value) }
        />

        <button onClick={handleAddTask}>Add</button>
      </div>
    </>
  )
}

export default TaskForm