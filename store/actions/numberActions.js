export const increaseNumber = number => dispatch => {
  dispatch({ type: 'INCREASE_NUMBER', number })
}

export const decreaseNumber = number => dispatch => {
  dispatch({ type: 'DECREASE_NUMBER', number })
}
