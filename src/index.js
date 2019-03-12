import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import { endpoint } from './utils/config'
import './index.css'

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? endpoint : '',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // eslint-disable-next-line
  document.getElementById('root')
)
