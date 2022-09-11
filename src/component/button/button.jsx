import * as S from './button.style'

const Button = ({ children, onClick, size, color, name }) => {
  return (
    <S.Wrapper>
      {children}
      <S.Shadow />

      <S.Button name={name} size={size} onClick={onClick} color={color}>
        {children}
      </S.Button>
    </S.Wrapper>
  )
}

export default Button
