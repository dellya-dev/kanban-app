import { useState } from 'react'
import './FilterBar.css'

function FilterBar({ setFilter }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
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
      <div>
        <div className="mobile-menu">
          <button
            className='mobile-menu-icon'
            onClick={() => setIsOpen(!isOpen)}
          >☰</button>

          {isOpen && (
            <div className="mobile-dropdown">
              <button
                className='all-button-mobile'
                onClick={() => setFilter("all")}
              >All</button>
              <button
                className='low-button-mobile'
                onClick={() => setFilter("low")}
              >Low</button>
              <button
                className='medium-button-mobile'
                onClick={() => setFilter("medium")}
              >Medium</button>
              <button
                className='high-button-mobile'
                onClick={() => setFilter("high")}
              >High</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FilterBar