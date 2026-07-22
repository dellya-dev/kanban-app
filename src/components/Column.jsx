import TaskCard from './TaskCard'

function Column({ tasks, status, dispatch, handleOpenModal }) {

  const filteredTasks = tasks.filter((task) => task.status === status)
  
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