export function onCounterIncrease(count) {
  return {
    type: 'INCREASE_COUNTER',
    count
  }
}

export function onCounterDecrease(count) {
  return {
    type: 'DECREASE_COUNTER',
    count
  }
}
