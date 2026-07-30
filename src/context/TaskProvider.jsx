import { useEffect, useReducer } from "react"
import { initialState, taskReducer } from "../reducers/taskReducer"
import { TaskContext } from "./TaskContext"

function TaskProvider( {children} ) {
  const [state, dispatch] = 
  useReducer(
    taskReducer, 
    initialState,
    (initial) => {
      const saved = localStorage.getItem("tasks")
      if (saved) {
        const parsed = JSON.parse(saved)
        return parsed
      } else {
        return initial
      }
    })

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(state))
    }, [state])


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

