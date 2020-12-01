import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './api/server'
import App from './App'
import store from './app/store'
import { fetchUsers } from './features/users/usersSlice'
import './index.css'

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)