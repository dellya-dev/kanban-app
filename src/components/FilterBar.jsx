import './FilterBar.css'

function FilterBar({ setFilter }) {

  return(
    <>
      <div className='filter-container'>
        <button 
        className='all-button'
          onClick={() => setFilter("all")}
        >All</button>
        <button 
        className='low-button'
          onClick={() => setFilter("low")}
        >Low</button>
        <button
          className='medium-button' 
          onClick={() => setFilter("medium")}
        >Medium</button>
        <button
          className='high-button' 
          onClick={() => setFilter("high")}
        >High</button>
      </div>
    </>
  )
}

export default FilterBar