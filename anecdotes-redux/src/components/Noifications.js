import React from 'react'

const Notification = props => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const getNotification = () => props.store.getState().notification

  return <div style={style}>{getNotification()}</div>
}

export default Notification
