import React from 'react'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = props => {
  const anecdotes = props.anecdotes
  const filterValue = props.filter

  const vote = (id, message) => {
    props.voteAnecdote(id)
    props.setNotification(`${message}, voted!`)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
  }

  const sortAnecdotes = anecdotes => anecdotes.sort((a, b) => a.votes - b.votes).reverse()

  const filterAnecdotes = (anecdotes, filterValue) =>
    sortAnecdotes(anecdotes.filter(a => a.content.toLowerCase().includes(filterValue.toLowerCase())))

  const anecdotesToShow = () =>
    filterAnecdotes(anecdotes, filterValue).map(anecdote => (
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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  setNotification,
  clearNotification,
  voteAnecdote
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
