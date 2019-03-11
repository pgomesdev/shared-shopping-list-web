import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ShoppingList from './ShoppingList'

const SHOPPING_LISTS_QUERY = gql`
  query SHOPPING_LISTS_QUERY {
    listShoppingLists {
      id
      name
    }
  }
`

class ShoppingLists extends Component {
  render() {
    return (
      <div>
        <h1>Suas Listas</h1>
        <Query query={SHOPPING_LISTS_QUERY}>
          {({ data, loading, error }) => {
            if (error) return <p>An error ocurred...</p>
            if (loading) return <p>Loading...</p>

            return (
              <ul>
                {data.listShoppingLists.map(shoppingList => (
                  <ShoppingList key={shoppingList.id} shoppingList={shoppingList} />
                ))}
              </ul>
            )
          }} 
        </Query>
      </div>
    )
  }
}

export default ShoppingLists
