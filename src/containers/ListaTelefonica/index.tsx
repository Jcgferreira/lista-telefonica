import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaTelefonica = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    const tarefasFiltradas = itens
    if (!termo && !criterio) return itens

    return tarefasFiltradas
      .filter((item) =>
        termo ? item.titulo.toLowerCase().includes(termo.toLowerCase()) : true
      )
      .filter((item) =>
        criterio === 'prioridade'
          ? item.prioridade === valor
          : criterio === 'status'
          ? item.status === valor
          : true
      )
  }

  const resultadoFitro = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `encontrados como ${termo}` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} Morador(es) a visitar: Todos ${complemento}`
    } else {
      mensagem = `${quantidade} Morador(es) encontrado(s) como : " ${`${valor}`} ${complemento} "`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = resultadoFitro(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              email={t.email}
              number={t.number}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaTelefonica
