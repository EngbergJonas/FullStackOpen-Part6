export const setFilter = filter => {
  return {
    type: 'FILTER',
    data: { content: filter }
  }
}

const initialState = null

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data.content
    default:
      return null
  }
}

export default filterReducer
