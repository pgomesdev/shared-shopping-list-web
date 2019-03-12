import React from 'react'
import PropTypes from 'prop-types'

const ShoppingList = ({ shoppingList }) => (
  <li>{shoppingList.name}</li>
)

ShoppingList.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ShoppingList
