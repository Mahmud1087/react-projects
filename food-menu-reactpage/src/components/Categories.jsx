const Categories = ({ filterMenu }) => {
  // const {category} = foodItems

  // function all() {
  //   setFoodItems(foodItems)
  // }
  // function lunch(cat) {
  //   setFoodItems(foodItems.filter((foodMenu) => foodMenu.category === cat))
  // }
  // function shakes(cat) {
  //   setFoodItems(foodItems.filter((foodMenu) => foodMenu.category === cat))
  // }

  return (
    <div className='btn-container'>
      <button className='filter-btn'>All</button>
      <button className='filter-btn' onClick={() => filterMenu('breakfast')}>
        Breakfast
      </button>
      <button className='filter-btn' onClick={() => filterMenu('lunch')}>
        Lunch
      </button>
      <button className='filter-btn' onClick={() => filterMenu('shakes')}>
        Shakes
      </button>
    </div>
  )
}

export default Categories
