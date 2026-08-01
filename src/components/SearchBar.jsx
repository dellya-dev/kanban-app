import './SearchBar.css'

function SearchBar({ search, setSearch }) {

  return (
    <>
        <div className="search-container">
          <input
            className='search-input'
            type="text"
            placeholder="🔍Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
    </>
  )
}

export default SearchBar