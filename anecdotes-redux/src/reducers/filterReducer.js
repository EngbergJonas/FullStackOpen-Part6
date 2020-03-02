export const setFilter = filter => {
  return {
    type: 'FILTER',
    data: { content: filter }
  }
}

const initialState = ''

const filterReducer = (state = initialState, action) => {
  console.log(action, 'action')
  console.log(state, 'state')
  switch (action.type) {
    case 'FILTER':
      return action.data.content
    default:
      return state
  }
}

export default filterReducer
