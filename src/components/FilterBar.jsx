function FilterBar({ setFilter }) {

  return(
    <>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("low")}>Low</button>
        <button onClick={() => setFilter("medium")}>Medium</button>
        <button onClick={() => setFilter("high")}>High</button>
      </div>
    </>
  )
}

export default FilterBar