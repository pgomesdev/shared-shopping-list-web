import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import ShoppingListItems from './ShoppingListItem'

export const SHOPPING_LISTS_QUERY = gql`
  query SHOPPING_LISTS_QUERY {
    listShoppingLists {
      id
      name
    }
  }
`
/* eslint-disable */
class ShoppingLists extends Component {
  render() {
    return (
      <Fragment>
        <h1 className='page-title'>Suas Listas</h1>
        <div className='create-new-list-container'>
          <Link className='create-new-list-btn' to='/new'>Criar Nova Lista</Link>
        </div>
        <div className='shopping-list-container'>
          <Query query={SHOPPING_LISTS_QUERY}>
            {({ data, loading, error }) => {
              if (error) return <p>Aconteceu um erro...</p>
              if (loading) return <p>Carregando...</p>

              return (
                <div className='shopping-list'>
                  {data.listShoppingLists.map(shoppingList => (
                    <ShoppingListItems key={shoppingList.id} shoppingList={shoppingList} />
                  ))}
                </div>
              )
            }}
          </Query>
        </div>
      </Fragment>
    )
  }
}
/* eslint-enable */

export default ShoppingLists
