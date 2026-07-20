function TaskCard({ task }) {
 
  return(
    <>
      <div>
        <p>{task.title}</p>
        <p>{task.date}</p>
        <p>{task.status}</p>
      </div>
    </>
  )

}

export default TaskCard