export class Skill{

  id?: number
  herramienta:String
  nivel: number

  constructor(herramienta: String, nivel:number){
    this.herramienta= herramienta
    this.nivel= nivel

  }
}
