import './Board.css'
import  Column from './Column'

function Board({ tasks }) {

  return(
    <>
      <Column tasks={tasks} status= "todo" />
      <Column tasks={tasks} status= "doing"/>
      <Column tasks={tasks} status= "done"/>
    </>
  )
}

export default Board