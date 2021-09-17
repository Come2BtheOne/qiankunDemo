let onGlobalStateChange, setGlobalState

export function getGlobalStateFn(props) {
  onGlobalStateChange = props.onGlobalStateChange
  setGlobalState = props.setGlobalState
}

export function setStateFn(state) {
  setGlobalState && setGlobalState(state)
}

export function onStateChangeFn(callBack) {
  onGlobalStateChange && onGlobalStateChange((value, prev)=> callBack(value, prev))
}