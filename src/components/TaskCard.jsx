import { ACTIONS } from "../reducers/actions"

function TaskCard({ task, dispatch, handleOpenModal }) {
 
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
      <div>
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