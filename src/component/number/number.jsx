import { Box } from '..'
import S from './number.style'

const Number = ({ number }) => {
  console.log('Show nicely this number', number)
  const digitList = String(number).split('')

  return (
    <Box>
      {digitList.map((n) => (
        <S.Number>{n}</S.Number>
      ))}
    </Box>
  )
}

export default Number
