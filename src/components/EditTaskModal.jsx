import { useState } from "react"
import { ACTIONS } from "../reducers/actions"
import useTask from "../context/useTask"
import './EditTaskModal.css'

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

  console.log("SAVE CLICKED")
  console.log("CLOSE CLICKED")
  console.log("CANCEL CLICKED")

  return (
    <>
      <div 
        className="overplay"
        onClick={handleCloseModal}
      >
        <div 
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Edit Task</h3>
          <input
            className="edit-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="edit-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="edit-status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">Todo</option>
            <option value="doing">doing</option>
            <option value="done">Done</option>
          </select>

          <select
            className="edit-priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <div className="button-container">
            <button
              className="save-button"
              onClick={handleSaveTask}
            >Save</button>
            <button
              className="cancel-button"
              onClick={handleCloseModal}
            >Cancel</button>
            <button
            className="close-button"
              onClick={handleCloseModal}
            >Close</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditTaskModal