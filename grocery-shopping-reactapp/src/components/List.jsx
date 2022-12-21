import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ id, groceryItem }) => {
  return (
    <div className='grocery-list'>
      <div className='grocery-item'>
        <p className='title'>{groceryItem}</p>
        <div className='btn-container'>
          <button className='edit-btn'>
            <FaEdit />
          </button>
          <button className='delete-btn'>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default List
