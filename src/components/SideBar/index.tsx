import { Link, useLocation } from 'react-router-dom'

import * as S from './styles'
import { useState } from 'react'

const SideBar = () => {
  const location = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <S.Overlay $isOpen={menuIsOpen} />
      <S.Hamburguer
        className={menuIsOpen ? 'active' : ''}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </S.Hamburguer>
      <S.Aside $isOpen={menuIsOpen}>
        <div>
          <img src="https://github.com/MVWerly.png" />
          <h2>Marcus Vinicius Lopes Werly</h2>
          <S.SocialMidiaContainer>
            <a
              href="https://github.com/MVWerly"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marcuswerly/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://wa.me/5522999128665"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="mailto:mv.werly@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </S.SocialMidiaContainer>
        </div>
        <nav>
          <ul>
            <S.LinksItem
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              <Link to="/">
                <i className="bi bi-house"></i>Home
              </Link>
            </S.LinksItem>
            <S.LinksItem
              className={location.pathname === '/about' ? 'is-active' : ''}
            >
              <Link to="/about">
                <i className="bi bi-person-circle"></i>Sobre
              </Link>
            </S.LinksItem>
            <S.LinksItem
              className={location.pathname === '/skills' ? 'is-active' : ''}
            >
              <Link to="/skills">
                <i className="bi bi-card-checklist"></i>Habilidades
              </Link>
            </S.LinksItem>
            <S.LinksItem
              className={location.pathname === '/portfolio' ? 'is-active' : ''}
            >
              <Link to="/portfolio">
                <i className="bi bi-archive"></i>Portfólio
              </Link>
            </S.LinksItem>
          </ul>
        </nav>
      </S.Aside>
    </>
  )
}

export default SideBar
