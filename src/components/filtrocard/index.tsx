import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, valor, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const verifyActive = () => {
    const actCriterio = filtro.criterio === criterio
    const actFiltro = filtro.valor === valor

    return actCriterio && actFiltro
  }

  const contaTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verifyActive()
  const quantidade = contaTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{quantidade}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
