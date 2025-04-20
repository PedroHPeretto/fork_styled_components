import HeaderComponent from './components/Cabecalho'
import HeroComponent from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle from './global'

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <HeroComponent />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
