import React, { useEffect } from 'react'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = props => {
  const notification = props.store.getState().notification.content
  console.log(props.store.getState().notification)

  useEffect(() => {
    setTimeout(() => {
      clearNotification()
    }, 5000)
  }, [])

  const style = {
    display: notification ? '' : 'none',
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return <div style={style}>{notification}</div>
}

export default Notification
