export class Experiencia {

  id?:number
  empresa: String
  puesto: String
  anioIngExp: String
  anioEgExp: String
  descripcion: String

  constructor(empresa: String, puesto: String, anioIngExp:String, anioEgExp:String, descripcion:String){

    this.empresa= empresa
    this.puesto= puesto
    this.anioIngExp= anioIngExp
    this.anioEgExp= anioEgExp
    this.descripcion= descripcion

  }

}
