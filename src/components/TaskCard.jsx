import { useDraggable } from "@dnd-kit/core"
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

  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = useDraggable({
    id: task.id,
  })

  return(
    <>
      <div 
        className={`task-card-container ${task.priority}`}
        ref={setNodeRef}
        style={{transform}}
      >
        <div
          className="drag-hanlde"
          {...listeners}
          {...attributes}
        >
          ☰ 
        </div>
        <h3>{task.title}</h3>
        <p>{task.date}</p>
        <p>{task.status}</p>

        <button
          className="delete-button"
          onClick={handleDelete}
        >🗑️Delete</button>

        <button
          className="edit-button"
          onClick={()=> handleOpenModal(task)}
        >🖋️Edit</button>
      </div>
    </>
  )

}

export default TaskCard