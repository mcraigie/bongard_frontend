function error(state = null, action) {
  switch (action.type) {
    case 'SET_ERROR': return { ...action.error };
    case 'SET_CURRENT_PROBLEM': return null;
    case 'RESPOND': return null;
    default: return state;
  }
}

export default error;
