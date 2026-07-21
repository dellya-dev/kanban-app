import { ACTIONS } from "../reducers/actions"

function TaskCard({ task, dispatch }) {
 
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
      </div>
    </>
  )

}

export default TaskCard