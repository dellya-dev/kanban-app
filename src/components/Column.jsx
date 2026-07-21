import TaskCard from './TaskCard'

function Column({ tasks, status, dispatch }) {

  const filteredTasks = tasks.filter((task) => task.status === status)

  console.log(tasks)
  console.log(filteredTasks.length)
  
  return(
    <>
      <div>
        {filteredTasks.map((task) => {
          return(
            <TaskCard 
              key={task.id}
              task={task}
              dispatch={dispatch}
            />
          )
        })}
      </div>
    </>
  )

}

export default Column