import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    anecdote.votes++
    await anecdoteService.update(anecdote.id, anecdote)
    dispatch({
      type: 'VOTE',
      data: anecdote
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [ ...state, action.data ]
    case 'VOTE':
      return state.map(a => (a.id !== action.data.id ? a : action.data))
    default:
      return state
  }
}

export default anecdoteReducer
