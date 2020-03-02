import React from 'react'
import { createNotification, clearNotification } from '../reducers/notificationReducer'
const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes
  const filterValue = props.store.getState().filter

  const vote = (id, message) => {
    props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
    props.store.dispatch(createNotification(`${message}, voted!`))
    setTimeout(() => {
      props.store.dispatch(clearNotification())
    }, 5000)
  }

  const sortAnecdotes = arr => arr.sort((a, b) => a.votes - b.votes).reverse()
  const filterAnecdotes = (arr, filterValue) =>
    arr.filter(a => a.content.toLowerCase().includes(filterValue.toLowerCase()))

  const anecdotesToShow = () =>
    sortAnecdotes(filterAnecdotes(anecdotes, filterValue)).map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    ))

  return <div>{anecdotesToShow()}</div>
}

export default AnecdoteList
