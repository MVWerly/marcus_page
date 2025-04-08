import styled from 'styled-components'
import { breakpoints, colors, linearGradient } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.gunmetal};
  display: flex;

  > div {
    width: 100%;
    padding: 2.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;

    img {
      border-radius: 1.2em;
      cursor: pointer;
      width: 8em;
      filter: grayscale(100%);
      transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;

      &:hover {
        filter: grayscale(0%);
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    > div {
      img {
        width: 5em;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    > div {
      padding-bottom: 1.5em;
      row-gap: 20px;
      img {
        width: 4em;
      }
    }
  }
`

export const DescriptionContainer = styled.aside`
  color: ${colors.white};
  padding: 1.25em;
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.cornflowerBlue};
  background: ${linearGradient};

  h3 {
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.5em;
  }

  p {
    line-height: 1.5em;
    font-size: 1.2em;
  }

  @media (max-width: ${breakpoints.desktop}) {
    h3 {
      margin-bottom: 0.5em;
    }

    p {
      line-height: 1.3em;
      font-size: 1em;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    h3 {
      margin-bottom: 0.5em;
    }

    p {
      line-height: 1em;
      font-size: 1em;
    }
  }
`
