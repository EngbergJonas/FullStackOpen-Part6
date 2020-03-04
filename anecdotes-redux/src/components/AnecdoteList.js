import React from 'react'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = props => {
  const vote = (id, message) => {
    props.voteAnecdote(id)
    props.setNotification(`${message}, voted!`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

const filterAnecdotes = ({ anecdotes, filter }) => {
  return filter
    ? anecdotes
        .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
        .reverse()
    : anecdotes.sort((a, b) => b.votes - a.votes).reverse()
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    visibleAnecdotes: filterAnecdotes(state),
    filter: state.filter
  }
}

export default connect(mapStateToProps, {
  setNotification,
  clearNotification,
  voteAnecdote
})(AnecdoteList)
