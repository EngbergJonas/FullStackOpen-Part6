export const setFilter = filter => {
  return {
    type: 'FILTER',
    data: { content: filter }
  }
}

const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.content
    default:
      return state
  }
}

export default filterReducer
