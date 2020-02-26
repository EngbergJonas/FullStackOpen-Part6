import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

/*
const Button = ({para, name}) => {
  <button onClick={store.dispatch({type: {param}})}>{name}</button>
}
*/

const App = () => {
  const reduxIncrement = param => {
    store.dispatch({
      type: param
    })
  }

  return (
    <div>
      <button onClick={() => reduxIncrement('GOOD')}>hyvä</button>
      <button onClick={() => reduxIncrement('OK')}>neutraali</button>
      <button onClick={() => reduxIncrement('BAD')}>huono</button>
      <button onClick={() => reduxIncrement('ZERO')}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
