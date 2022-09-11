import * as C from './calculator.constant'

export const submitChoiceAction = (choice) => ({
  type: C.SUBMIT_CHOICE,
  choice,
})

export const getRandomNumber = () => ({
  type: C.GENERATE_NUMBER_LIST,
})

export const checkResultAction = (result) => ({
  type: C.CHECK_RESULT_ADD,
  result,
})
