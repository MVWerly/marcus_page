import img from '../../assets/images/tecnology.png'

import * as S from './styles'

const Description = () => (
  <S.Section>
    <h3>Sobre mim</h3>
    <div>
      <p>
        Olá, meu nome é Marcus, tenho 33 anos e sou apaixonado por tecnologia.
        Conheci a programação há alguns anos e decidi me aprofundar na área.
        Descobri que é o campo onde quero trabalhar e crescer profissionalmente.
      </p>
      <p>
        Tenho um grande apetite por aprendizado e estou sempre buscando evolução
        em tudo o que faço. Sou uma pessoa de fácil convivência, mas também
        muito competitiva. Estou sempre pronto para enfrentar novos desafios.
        Atualmente, estou me especializando em desenvolvimento frontend.
      </p>
      <a href="/marcus_cv.pdf" download="marcus_cv.pdf">
        Dowload CV<i className="bi bi-box-arrow-down"></i>
      </a>
    </div>
    <img src={img} />
  </S.Section>
)

export default Description
