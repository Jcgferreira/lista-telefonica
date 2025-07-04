import BarraLateral from '../../containers/sidebar'
import ListaTelefonica from '../../containers/ListaTelefonica'
import BotaoAdd from '../../components/BotaoAdd'

const Home = () => (
  <>
    <BarraLateral mostraFiltros={true} />
    <ListaTelefonica />
    <BotaoAdd />
  </>
)

export default Home
