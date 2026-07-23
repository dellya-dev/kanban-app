import useTask from '../context/useTask'
import TaskCard from './TaskCard'

function Column({ status, handleOpenModal }) {

  const { tasks, dispatch } = useTask()
  const filteredTasks = tasks.filter((task) => task.status === status)

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
              dispatch={dispatch}
              handleOpenModal={handleOpenModal}
            />
          )
        })}
      </div>
    </>
  )

}

export default Column