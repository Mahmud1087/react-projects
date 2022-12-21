import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ id, groceryItem, handleDelete, handleEdit }) => {
  return (
    <div className='grocery-list'>
      <div className='grocery-item'>
        <p className='title'>{groceryItem}</p>
        <div className='btn-container'>
          <button className='edit-btn' onClick={() => handleEdit(id)}>
            <FaEdit />
          </button>
          <button className='delete-btn' onClick={() => handleDelete(id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default List
