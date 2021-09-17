import { initGlobalState } from 'qiankun'

let onGlobalStateChange, setGlobalState

const initState = {
  VueMicroDisable: false,
  ReactMicroDisable: false
}

export function initStateFn() {
  const action = initGlobalState(initState)
  setGlobalState = action.setGlobalState
  onGlobalStateChange = action.onGlobalStateChange
}

export function setStateFn(state) {
  setGlobalState(state)
}

export function onStateChangeFn(callBack) {
  onGlobalStateChange((value, prev) => callBack(value, prev))
}
