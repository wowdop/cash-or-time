import styled, { css } from 'styled-components'

export const absoluteCommon = css`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
`

export const Button = styled.button`
  border-radius: 0.5rem;
  position: absolute;
  transition: 250ms;
  background-color: hsla(173, 75%, 40%, 1);
  font-size: 2rem;
  white-space: nowrap;
  z-index: 1;
  cursor: pointer;
  padding: 0;
  border: 0;
  overflow: hidden;

  ${absoluteCommon}
`

export const Wrapper = styled.div`
  border-radius: 0.5rem;
  position: relative;
  font-size: 2rem;
  padding: 1rem 2rem;
  display: inline-flex;
  border: 5px solid transparent;
  z-index: 0;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;

  &:hover ${Button} {
    transform: translateX(-0.25rem) translateY(-0.25rem);
    box-shadow: rgb(0 0 0 / 50%) 0 2px 5px, inset rgb(255 255 255 / 25%) 0 1px 0,
      inset rgb(0 0 0 / 25%) 0 0 0, inset rgb(255 255 255 / 3%) 0 20px 0,
      inset rgb(0 0 0 / 15%) 0 -20px 20px,
      inset rgb(255 255 255 / 5%) 0 20px 20px;
  }
`

export const Shadow = styled.div`
  ${absoluteCommon};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  width: 100%;
  right: -10px;
  z-index: 0;
  cursor: pointer;
  transform: translateX(0.25rem) translateY(0.25rem);
  overflow: hidden;
`
