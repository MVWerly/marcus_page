import styled from 'styled-components'
import { breakpoints, colors, linearGradient } from '../../styles'

export const Section = styled.section`
  padding: 1.25em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.skyBlue};
  overflow: auto;

  h3 {
    font-size: 2em;
  }

  > div {
    max-width: 80%;
    text-align: center;

    p {
      font-size: 1.37em;
      text-align: start;
      margin: 1.2em 0;
    }

    a {
      display: inline-block;
      cursor: pointer;
      padding: 0.7em;
      border: none;
      color: ${colors.white};
      border-radius: 3.12em;
      background: ${colors.cornflowerBlue};
      background: ${linearGradient};

      i {
        margin-left: 0.5em;
      }
    }
  }

  img {
    max-width: 800px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: auto;
  }
`
