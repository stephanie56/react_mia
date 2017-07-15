export function onBreakCounterIncrease() {
  return {
    type: 'INCREASE_BREAK_COUNTER',
  }
}

export function onBreakCounterDecrease() {
  return {
    type: 'DECREASE_BREAK_COUNTER',
  }
}

export function onWorkCounterIncrease() {
  return {
    type: 'INCREASE_WORK_COUNTER'
  }
}

export function onWorkCounterDecrease() {
  return {
    type: 'DECREASE_WORK_COUNTER'
  }
}
