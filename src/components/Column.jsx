import { useMemo } from 'react'
import useTask from '../context/useTask'
import TaskCard from './TaskCard'
import { useDroppable } from '@dnd-kit/core'
import './Column.css'

function Column({ status, handleOpenModal, search, filter }) {

  const { tasks } = useTask()

  const filteredTasks = useMemo(
    () => tasks
      .filter((task) => task.status === status)
      .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
      .filter((task) =>{
        if(filter === "low") {
          return task.priority === "low"
        } else if (filter === "medium") {
          return task.priority === "medium"
        } else if (filter === "high") {
          return  task.priority === "high"
        } else {
          return "all"
        }
      })
    , [tasks, status, search, filter])

    const {setNodeRef} = useDroppable({
      id: status
    })

  return (
    <>
      <div
        ref={setNodeRef}
        className='column'
      >
        {filteredTasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              task={task}
              handleOpenModal={handleOpenModal}
            />
          )
        })}
      </div>
    </>
  )

}

export default Column