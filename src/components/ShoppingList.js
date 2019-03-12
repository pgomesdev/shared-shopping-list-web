import React from 'react'
import PropTypes from 'prop-types'

const ShoppingList = ({ shoppingList }) => (
  <div className='list-item'>
    <p className='list-name'>{shoppingList.name}</p>
  </div>
)

ShoppingList.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ShoppingList
