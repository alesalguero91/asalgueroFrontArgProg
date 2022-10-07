export class Persona{

  id?: number
  nombre : String
  apellido: String
  profesion: String
  nivel: String
  acercaDeMi: String

  constructor(nombre: String, apellido: String, profesion: String, nivel: String, acercaDeMi:String){
    this.nombre=nombre
    this.apellido= apellido
    this.profesion= profesion
    this.nivel= nivel
    this.acercaDeMi= acercaDeMi
  }
}
