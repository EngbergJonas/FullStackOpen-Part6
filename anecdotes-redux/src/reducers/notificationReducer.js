const notification = 'A new anecdote has been posted!'

export const createNotification = content => {
  return {
    type: 'NOTIFICATION',
    data: { content }
  }
}

const notificationReducer = (state = notification, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export default notificationReducer
