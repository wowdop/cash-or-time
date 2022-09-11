import styled from 'styled-components'

const getAlign = ({ align }) => (align ? `align-items: ${align};` : '')
const getJustify = ({ justify }) =>
  justify ? `justify-content: ${justify};` : ''

const getVertical = ({ vertical }) =>
  vertical ? 'flex-direction: column;' : ''

const Box = styled.div`
  display: flex;
  gap: 1rem;

  ${getAlign}
  ${getJustify}
  ${getVertical}
`

const style = {
  Box,
}

export default style
