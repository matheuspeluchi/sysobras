const INITIAL_STATE = {
  drawer: true
}

export default function globalReducer(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE') {
    return {
      ...state,
      drawer: !action.drawer,
    }
  }
  return state;
}