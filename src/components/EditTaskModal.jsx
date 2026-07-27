import { useState } from "react"
import { ACTIONS } from "../reducers/actions"
import useTask from "../context/useTask"

function EditTaskModal({ editingTask, handleCloseModal }) {
  const [title, setTitle] = useState(editingTask.title)
  const [status, setStatus] = useState(editingTask.status)
  const [date, setDate] = useState(editingTask.date)
  const [priority, setPriority] = useState(editingTask.priority)

  const { dispatch } = useTask()

  function handleSaveTask() {
    dispatch({
      type: ACTIONS.EDIT_TASK,
      payload: {
        id: editingTask.id,
        title: title,
        date: date,
        status: status,
        priority: priority
      }
    })
    handleCloseModal()
  }

  return(
    <>
      <div>
        <h3>Edit Task</h3>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select 
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          >
          <option value="todo">Todo</option>
          <option value="doing">doing</option>
          <option value="done">Done</option>
        </select>

        <select 
          name="priority" 
          value={priority}
          onChange={(e) => setPriority(e. target.value)}
          >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <div>
          <button
            onClick={handleSaveTask}
          >Save</button>
          <button
            onClick={handleCloseModal}
          >Cancel</button>
          <button
            onClick={handleCloseModal}
          >Close</button>
        </div>
      </div>
    </>
  )
}

export default EditTaskModal