import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'
import { Button } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function returnColor(props: TagProps): string {
  let color = '#2f3640'

  if (props.parametro === 'prioridade') {
    if ('status' in props && props.status) {
      switch (props.status) {
        case enums.Status.PENDENTE:
          color = variaveis.amarelo
          break
        case enums.Status.CONCLUIDA:
          color = variaveis.verde1
          break
      }
    } else if ('prioridade' in props && props.prioridade) {
      switch (props.prioridade) {
        case enums.Prioridade.URGENTE:
          color = variaveis.vermelho
          break
        case enums.Prioridade.IMPORTANTE:
          color = variaveis.amarelo2
          break
        case enums.Prioridade.NORMAL:
          color = variaveis.verde1
          break
      }
    }
  }

  return color
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => returnColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  line-height: 24px;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const RedButton = styled(Button)`
  background-color: ${variaveis.bcancelar};
`
export const YellowButton = styled(Button)`
  background-color: ${variaveis.amarelo};
`
