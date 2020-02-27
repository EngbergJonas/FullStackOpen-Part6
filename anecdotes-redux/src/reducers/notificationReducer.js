export const createNotification = content => {
  return {
    type: 'NOTIFICATION',
    data: { content }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

const initialState = [ { content: '' } ]

const notificationReducer = (state = initialState, action) => {
  console.log('NOTIFICATION action: ', action.data)
  //console.log('NOTIFICATION state: ', action)
  switch (action.type) {
    case 'NOTIFICATION':
      return action.data
    case 'CLEAR':
      return initialState
    default:
      return state
  }
}

export default notificationReducer
