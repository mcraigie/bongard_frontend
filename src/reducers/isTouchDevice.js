function isTouchDevice(state = false, action) {
  switch (action.type) {
    case 'SET_AS_TOUCH_DEVICE': return true;
    default: return state;
  }
}

export default isTouchDevice;
