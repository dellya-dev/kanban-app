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

  return (
    <>
      <div
        className="task-card-container"
        ref={setNodeRef}
        style={{ transform }}
      >
        <div className="drag-handle-priority-container">
          <div
            className="drag-handle"
            data-tooltip="Drag"
            {...listeners}
            {...attributes}
          >
            ⠿
          </div>

          <div 
            className={`priority-icon  ${task.priority}`}
          >▫️</div>
        </div>


        <h3>{task.title}</h3>
        <p>{task.date}</p>
        <p>{task.status}</p>

        <div className="delete-edit-button-container">
          <button
            className="delete-button"
            onClick={handleDelete}
          >🗑️Delete</button>

          <button
            className="edit-button"
            onClick={() => handleOpenModal(task)}
          >🖋️Edit</button>
        </div>
      </div>
    </>
  )

}

export default TaskCard