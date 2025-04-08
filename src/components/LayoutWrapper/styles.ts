import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Main = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 25vw auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 100vw;
  }
`
