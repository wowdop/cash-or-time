import { Box, Button } from '..'
import S from './panel.style'

const Panel = ({ message, title, color, action }) => {
  const handleClick = (e) => {
    const { name } = e.target
    action(name)
  }

  return (
    <S.Panel hue={color}>
      <h1>{title}</h1>
      <p>{message}</p>

      <Box>
        <Button name="try" onClick={handleClick}>
          Try again <span>😡</span>
        </Button>

        <Button name="cash" onClick={handleClick}>
          Cash &#129297;
        </Button>

        <Button name="time" onClick={handleClick}>
          Time &#9200;
        </Button>
      </Box>
    </S.Panel>
  )
}

export default Panel
