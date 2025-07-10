import * as enums from '../utils/enums/tarefa'

export class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  id: number
  descricao: string
  number!: number
  email!: string

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    id: number,
    descricao: string,
    number: number,
    email: string
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.id = id
    this.descricao = descricao
    this.number = number
    this.email = email
  }
}
