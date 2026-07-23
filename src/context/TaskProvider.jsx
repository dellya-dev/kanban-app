import { useReducer } from "react"
import { initialState, taskReducer } from "../reducers/taskReducer"
import { TaskContext } from "./TaskContext"

function TaskProvider( {children} ) {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return(
    <TaskContext.Provider 
      value={{
        tasks: state.tasks, 
        dispatch, 
        }}
      >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider

