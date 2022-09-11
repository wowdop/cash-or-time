import styled from 'styled-components'

const getColor = ({ hue = 222 }) => `
  color: hsla(${hue}, 100%, 15%, 1);
  background-color: hsla(${hue + 180}, 25%, 90%, 1);
  border: 2px solid hsla(${hue}, 90%, 30%, 1);
  box-shadow: inset 0 0 75px hsla(${hue - 200}, 30%, 70%, 1);
`

const Panel = styled.div`
  color: white;
  border-radius: 1rem;
  padding: 1rem;

  ${getColor}
`

const style = {
  Panel,
}

export default style
