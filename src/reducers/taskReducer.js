import {ACTIONS} from "./actions"

export const initialState = {
  tasks:[]
}

export function taskReducer(state, action) {

  switch(action.type) {
    

    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks, 
          action.payload
        ]
      }
      default:
        return state

    case ACTIONS.DELETE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      }
  }
}