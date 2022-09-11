import styled from 'styled-components'

const Operation = styled.div`
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Panel = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: auto 1fr;
`

const style = { Panel, Operation }

export default style
