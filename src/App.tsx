import Paths from './routes'
import { Provider } from 'react-redux'

import { store } from './store'

import LayoutWrapper from './components/LayoutWrapper'
import SideBar from './components/SideBar'

import { GlobalStyles } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <LayoutWrapper>
        <>
          <SideBar />
          <Paths />
        </>
      </LayoutWrapper>
    </Provider>
  )
}

export default App
