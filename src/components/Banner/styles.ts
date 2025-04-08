import styled from 'styled-components'
import image from '../../assets/images/image.jpg'
import { colors } from '../../styles'

export const BackgroundImage = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  > div {
    margin-left: 1.25em;

    h1 {
      font-size: 3.12em;
      color: ${colors.white};
    }

    span {
      font-size: 2em;
      font-weight: 700;
      color: ${colors.white};
    }
  }
`
