import React from 'react'

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes

  const vote = id => {
    props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const sortByVotes = arr => arr.sort((a, b) => a.votes - b.votes).reverse()

  const anecdotesToShow = () =>
    sortByVotes(anecdotes).map(anecdote => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    ))

  return <div>{anecdotesToShow()}</div>
}

export default AnecdoteList
