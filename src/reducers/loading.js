function loading(state = true, action) {
  switch (action.type) {
    case "SET_CURRENT_PROBLEM":
      return false;
    case "SET_ERROR":
      return false;
    case "RESPOND":
      return true;
    case "@@router/LOCATION_CHANGE":
      return true;
    default:
      return state;
  }
}

export default loading;
