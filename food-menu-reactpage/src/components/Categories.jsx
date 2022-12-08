const Categories = ({ categories, filterMenu }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterMenu(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
