import notificationReducer, { createNotification, clearNotification } from './notificationReducer'
import deepFreeze from 'deep-freeze'

describe('notificationReducer', () => {
  test('notification can be set', () => {
    const state = notificationReducer(undefined, { type: 'DO_NOTHING' })

    const action = createNotification('New notification!')

    deepFreeze(state)

    const newState = notificationReducer(state, action)

    expect(newState).toEqual('New notification!')
  })
  test('notification can be cleared', () => {
    const state = notificationReducer(undefined, { type: 'DO_NOTHING' })

    const action = clearNotification()

    deepFreeze(state)

    const newState = notificationReducer(state, action)

    expect(newState).toEqual('')
  })
})
