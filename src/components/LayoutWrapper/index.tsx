import * as S from './styles'

type Props = {
  children: JSX.Element
}

const LayoutWrapper = ({ children }: Props) => <S.Main>{children}</S.Main>

export default LayoutWrapper
