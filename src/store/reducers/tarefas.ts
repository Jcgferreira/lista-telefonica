import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tarefa } from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Marcos Freitas',
      descricao: '(53) 279999999, Casa N 222',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarfefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarfefa !== -1) {
        state.itens[indexTarfefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )

      if (tarefaExiste) {
        alert('Tarefa duplicada com o mesmo nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarfefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexTarfefa !== -1) {
        state.itens[indexTarfefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
