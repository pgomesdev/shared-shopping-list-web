import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { SHOPPING_LISTS_QUERY } from './ShoppingLists'

const CREATE_LIST_MUTATION = gql`
  mutation CREATE_LIST_MUTATION($name: String!) {
    createShoppingList(name: $name) {
      id
      name
    }
  }
`

class CreateShoppingList extends Component {
  state = {
    name: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState(() => ({
      [name]: value,
    }))
  }

  handleSubmit = async (e, createShoppingList) => {
    e.preventDefault()

    await createShoppingList()

    this.setState(() => ({
      name: '',
    }))
  }

  render() {
    return (
      <Fragment>
        <h1 className='page-title'>Nova Lista</h1>
        <div className='form-container'>
          <Mutation
            mutation={CREATE_LIST_MUTATION}
            variables={this.state}
            refetchQueries={[
              { query: SHOPPING_LISTS_QUERY },
            ]}
          >
            {(createShoppingList, { loading, error }) => (
              <form onSubmit={e => this.handleSubmit(e, createShoppingList)}>
                {error && <p>An error ocurred...</p>}
                <fieldset disabled={loading} aria-busy={loading}>
                  <div>
                    <label htmlFor='name'>
                      Nome
                      <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={this.handleChange}
                        // eslint-disable-next-line react/destructuring-assignment
                        value={this.state.name}
                      />
                    </label>
                  </div>
                  <button type='submit'>Salvar</button>
                </fieldset>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    )
  }
}

export default CreateShoppingList
