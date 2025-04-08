import styled from 'styled-components'
import { breakpoints, colors, linearGradient } from '../../styles'

type AsideProps = {
  $isOpen: boolean
}

export const Hamburguer = styled.button`
  display: none;
  cursor: pointer;
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 10;
  background: ${linearGradient};
  border: none;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;

  &.active {
    :nth-child(1) {
      transform: translateY(6px) rotate(-45deg);
    }

    :nth-child(3) {
      transform: translatey(-7px) rotate(45deg);
    }

    :nth-child(2) {
      width: 0;
    }
  }

  span {
    display: block;
    margin: 4px auto;
    height: 3px;
    width: 80%;
    background-color: ${colors.white};
    position: relative;
    transform-origin: center;
    transition: 0.5s;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Overlay = styled.div<AsideProps>`
  position: absolute;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`

export const Aside = styled.aside<AsideProps>`
  color: ${colors.silverGray};
  padding: 1.25em;
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.cornflowerBlue};
  background: ${linearGradient};

  > div {
    text-align: center;
    margin-bottom: 1em;

    h2 {
      color: ${colors.white};
      margin-top: 1em;
    }

    img {
      max-width: 200px;
      width: 100%;
      border-radius: 50%;
      border: 0.3em solid ${colors.silverGray};

      &:hover {
        border-color: ${colors.white};
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    > div {
      img {
        max-width: 10em;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
    position: absolute;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    z-index: 10;

    > div {
      h2 {
        font-size: 16px;
      }
    }
  }
`

export const SocialMidiaContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 0.5em;

    i {
      font-size: 2em;
      color: ${colors.silverGray};
    }

    &:hover {
      i {
        color: ${colors.white};
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    a {
      i {
        font-size: 1.5em;
      }
    }
  }
`

export const LinksItem = styled.li`
  margin-top: 0.5em;
  cursor: pointer;
  font-size: 1.2em;
  border-bottom: 2px solid transparent;
  font-weight: bold;

  a {
    display: block;
    padding-bottom: 0.5em;
    width: 100%;
    border-bottom: 2px solid transparent;
    color: ${colors.silverGray};

    i {
      margin-right: 1em;
    }

    &:hover {
      color: ${colors.white};
      border-bottom: 2px solid ${colors.white};
    }
  }

  &.is-active {
    a {
      border-bottom: 2px solid ${colors.white};
      color: ${colors.white};
    }
  }
`
