import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyles, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyles />
        <Container>
          <RouterProvider router={rotas} />
          {/*  */}
        </Container>
      </Provider>
    </div>
  )
}

export default App
