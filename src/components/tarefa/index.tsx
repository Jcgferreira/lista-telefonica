import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import { Tarefa as TarefaClass } from '../../models/Tarefa'
import { Button, GreenButton } from '../../styles'

import * as enums from '../../utils/enums/tarefa'

type Props = TarefaClass

export const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id,
  number,
  email
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelEditing() {
    setEditing(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {editing && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <label htmlFor={titulo}>
        <S.Titulo>{email}</S.Titulo>
      </label>
      <label htmlFor={titulo}>
        <S.Titulo>{number}</S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!editing}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.ActBar>
        {editing ? (
          <>
            <GreenButton
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id,
                    number,
                    email
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </GreenButton>
            <S.RedButton onClick={cancelEditing}>Cancelar</S.RedButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditing(true)}>Editar</Button>
            <S.RedButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.RedButton>
          </>
        )}
      </S.ActBar>
    </S.Card>
  )
}
