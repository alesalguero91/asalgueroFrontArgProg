export class Idiomas{

  id?: number
  idiom: String
  oral: number
  escrito: number

  constructor(idiom: String, oral: number, escrito: number){
    this.idiom= idiom
    this.oral= oral
    this.escrito = escrito
  }
}
