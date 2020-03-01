export const createNotification = notification => {
  return {
    type: 'NOTIFICATION',
    data: { content: notification }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
    data: { content: '' }
  }
}

const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return action.data.content
    case 'CLEAR':
      return action.data.content
    default:
      return state
  }
}

export default notificationReducer
