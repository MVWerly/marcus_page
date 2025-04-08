import * as S from './styles'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => (
  <S.BackgroundImage>
    <div>
      <h1>Marcus Werly</h1>
      <TypeAnimation
        sequence={[
          'Olá,',
          1000,
          'seja bem-vindo.',
          1000,
          'Esta é minha página de apresentação.',
          1000,
          'Sou Desenvolvedor Frontend.',
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  </S.BackgroundImage>
)

export default Banner
