import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { endpoint } from './utils/config'
import './index.css'
import './style/global.css'

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? endpoint : '',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  // eslint-disable-next-line
  document.getElementById('root')
)
