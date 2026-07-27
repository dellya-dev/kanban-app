import useTask from "../context/useTask"
import { ACTIONS } from "../reducers/actions"
import './TaskCard.css'


function TaskCard({ task, handleOpenModal }) {
  const { dispatch } = useTask()
 
  function handleDelete() {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: {
        id: task.id
      }
    })
  }
  return(
    <>
      <div className={`task-card-container ${task.priority}` }>
        <p>{task.title}</p>
        <p>{task.date}</p>
        <p>{task.status}</p>

        <button
          onClick={handleDelete}
        >🗑️</button>

        <button
        onClick={()=> handleOpenModal(task)}
        >🖋️Edit</button>
      </div>
    </>
  )

}

export default TaskCard