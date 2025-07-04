import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { GreenButton, Input, MainContainer, Titulo } from '../../styles'
import { Formulario } from './styles'
import { Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Morador</Titulo>
      <Formulario onSubmit={cadastrarTarefa}>
        <Input
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Input
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Numero de contato e descrição da casa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <GreenButton type="submit">Cadastrar</GreenButton>
      </Formulario>
    </MainContainer>
  )
}

export default Form
