import { useState } from "react"

function EditTaskModal({ editingTask, handleCloseModal }) {
  const [title, setTitle] = useState(editingTask.title)
  const [status, setStatus] = useState(editingTask.status)
  const [date, setDate] = useState(editingTask.date)


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

        <div>
          <button>Save</button>
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