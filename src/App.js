import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ShoppingLists from './components/ShoppingLists'
import CreateShoppingList from './components/CreateShoppingList'

/* eslint-disable */
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ShoppingLists} />
        <Route path='/new' component={CreateShoppingList} />
      </Switch>
    )
  }
}
/* eslint-enable */

export default App
