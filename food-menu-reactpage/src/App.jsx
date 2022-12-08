import React, { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './components/data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [foodItems, setFoodItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  function filterMenu(cat) {
    if (cat === 'all') {
      setFoodItems(items)
      return
    }
    const newFilter = items.filter((item) => item.category === cat)
    setFoodItems(newFilter)
  }

  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} categories={categories} />
        <Menu foodItems={foodItems} />
      </div>
    </main>
  )
}

export default App
