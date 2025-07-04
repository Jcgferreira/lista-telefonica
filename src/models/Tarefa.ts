import * as enums from '../utils/enums/tarefa'

export class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number
  descricao: string

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    id: number,
    descricao: string
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.id = id
    this.descricao = descricao
  }
}
