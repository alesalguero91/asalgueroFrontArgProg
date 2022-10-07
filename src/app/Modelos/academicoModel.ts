export class Academico{

  id?: number
  titulo: String
  establecimiento: String
  anioIngAcad: String
  anioEgAcad: String
  promedio: String
  finalizado: String

constructor(titulo: String, establecimiento: String, anioIngAcad: String, anioEgAcad: String, promedio: String, finalizado: String){
  this.titulo= titulo
  this.establecimiento= establecimiento
  this.anioIngAcad= anioIngAcad
  this.anioEgAcad= anioEgAcad
  this.promedio= promedio
  this.finalizado= finalizado
}
}
