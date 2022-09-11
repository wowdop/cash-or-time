import * as C from './calculator.constant'

const result = {
  message: 'change me',
  value: 0,
}

export const initialState = {
  numberList: [],
  result,
  config: {
    level: 1,
    bonus: 1,
  },
}

const sumNumbers = (...numberList) => numberList.reduce((a, c) => a + c, 0)

const getRandomNumber = (digits) =>
  Math.floor(Math.pow(10, digits) * Math.random())

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SUBMIT_CHOICE:
      return {
        ...state,
        result,
      }

    case C.GENERATE_NUMBER_LIST:
      return {
        ...state,
        numberList: [1, 2].map(() => getRandomNumber(state.config.level)),
      }

    case C.CHECK_RESULT_ADD:
      return {
        ...state,
        result: {
          info:
            action.result === sumNumbers(...state.numberList)
              ? {
                  title: 'Good gob!',
                  color: 155,
                  message: 'You got the correct answer and YOU are legend!',
                }
              : {
                  color: 0,
                  title: 'Uuu! Not a good day!',
                  message: 'Train some more! So you can master math',
                },
          value: action.result,
        },
        numberList: [1, 2].map(() => getRandomNumber(state.config.level)),
      }

    default:
      return state
  }
}
