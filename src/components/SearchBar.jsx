import './SearchBar.css'

function SearchBar({ search, setSearch }) {

  return (
    <>
      <div className="search-position">
        <div className="search-container">
          <h2>KANBAN</h2>
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default SearchBar