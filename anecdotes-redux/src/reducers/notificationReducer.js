export const setNotification = (notification, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      data: { content: notification }
    })
    setTimeout(
      () =>
        dispatch({
          type: 'CLEAR',
          data: { content: '' }
        }),
      timeout * 1000
    )
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
