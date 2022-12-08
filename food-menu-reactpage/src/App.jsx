import React, { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './components/data'

function App() {
  const [foodItems, setFoodItems] = useState(items)
  const [lunch, setLunch] = useState(items)

  function filterMenu(cat) {
    setFoodItems((prevFood) =>
      prevFood.filter((foodMenu) => foodMenu.category === cat)
    )
  }

  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} />
        <Menu foodItems={foodItems} />
      </div>
    </main>
  )
}

export default App
