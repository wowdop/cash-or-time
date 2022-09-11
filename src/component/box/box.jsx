import S from './box.style'

const Box = ({ children, align, justify, vertical, hue }) => {
  return (
    <S.Box align={align} vertical={vertical} justify={justify} hue={hue}>
      {children}
    </S.Box>
  )
}

export default Box
