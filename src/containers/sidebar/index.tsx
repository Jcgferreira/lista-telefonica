import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import FiltroCard from '../../components/filtrocard'
import { Button, Input } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostraFiltros ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="Diamante"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="Ouro"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Volta a lista de moraderes cadastrados
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
