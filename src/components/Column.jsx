import { useMemo } from 'react'
import useTask from '../context/useTask'
import TaskCard from './TaskCard'

function Column({ status, handleOpenModal, search }) {

  const { tasks } = useTask()
  
  const filteredTasks =  useMemo(
    () => tasks.filter((task) => 
      task.status === status && 
      task.title.toLowerCase().includes(search.toLowerCase()) ), [tasks, status, search] )
  
  console.log(filteredTasks)
  console.log(status)
  
  return(
    <>
      <div>
        {filteredTasks.map((task) => {
          return(
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