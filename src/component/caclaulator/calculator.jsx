import { useEffect } from 'react'
import { useReducer } from 'react'
import { Form, Formik, Field } from 'formik'
import { Box, Number, Panel } from '..'
import { calculatorReducer, initialState } from './calculator.redux'
import {
  checkResultAction,
  getRandomNumber,
  submitChoiceAction,
} from './calculator.action'
import S from './calculator.style'

const Calculator = () => {
  const [data, update] = useReducer(calculatorReducer, initialState)
  const {
    numberList,
    result: { message, info },
  } = data
  const [first, second] = numberList

  useEffect(() => {
    update(getRandomNumber())
  }, [])

  const onSubmit = ({ result }) => {
    update(checkResultAction(+result))
  }

  const action = (choice) => update(submitChoiceAction(choice))

  // console.log(data)
  return (
    <S.Panel>
      <S.Operation>+</S.Operation>
      <Box vertical>
        <Box justify="end">
          <Number number={first} />
        </Box>

        <Box justify="end">
          <Number number={second} />
        </Box>
      </Box>

      <Formik initialValues={{ result: 0 }} onSubmit={onSubmit}>
        {() => (
          <Form>
            <Field name="result" />
            <input type="submit" value="Check result" />
          </Form>
        )}
      </Formik>

      {info?.message && (
        <Box hue={+info?.color}>
          <Panel
            message={info?.message}
            title={info?.title}
            color={info?.color}
            action={action}
          />
        </Box>
      )}
    </S.Panel>
  )
}

export default Calculator
