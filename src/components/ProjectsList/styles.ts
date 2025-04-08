import styled from 'styled-components'
import { breakpoints, colors, linearGradient } from '../../styles'

type CardProps = {
  $toggle: boolean
}

export const Container = styled.section`
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25em;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  position: relative;
  color: ${colors.silverGray};
  border-radius: 0.6em;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${colors.white};
  }
`

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;

  > div {
    position: absolute;
    top: 0.5em;
    left: 0.5em;

    span {
      color: ${colors.white};
      padding: 0.25em 0.37em;
      border-radius: 0.6em;
      font-size: 0.8em;
      background: ${colors.cornflowerBlue};
      background: ${linearGradient};
      margin-right: 0.37em;
    }
  }

  img {
    width: 100%;
  }

  > button {
    border: none;
    background: none;
    position: absolute;
    bottom: 0;
    right: 0.4em;
    transition: transform 0.5s ease-in-out;

    &.rotate {
      transform: rotate(45deg);
    }

    i {
      color: ${colors.indigoBlue};
      cursor: pointer;
      font-size: 3em;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    > div {
      span {
        font-size: 0.5em;
      }
    }
  }
`

export const DescriptionContainer = styled.div<CardProps>`
  display: ${(props) => (props.$toggle ? 'block' : 'none')};
  padding: ${(props) => (props.$toggle ? '0.6em' : '0')};
  background: ${colors.cornflowerBlue};
  background: ${linearGradient};
  transition: opacity 0.5s ease, transform 0.5s ease;
  border-bottom-right-radius: 0.6em;
  border-bottom-left-radius: 0.6em;

  p {
    font-size: 0.9em;
    margin: 1em 0;
  }

  a {
    display: inline-block;
    color: ${colors.gunmetal};
    font-weight: bold;
    background-color: ${colors.silverGray};
    border: none;
    padding: 0.25em 0.5em;
    border-radius: 0.6em;
    margin-right: 0.5em;
    cursor: pointer;

    &:hover {
      background-color: ${colors.white};
    }
  }
`
