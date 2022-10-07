export class Proyecto{

  id?: number
  nombreProy: String
  detalleProy: String
  imgProy: String
  urlProy: String

  constructor(nombreProy: String, detalleProy:String, imgProy:String, urlProy:String){

    this.nombreProy= nombreProy
    this.detalleProy= detalleProy
    this.imgProy= imgProy
    this.urlProy= urlProy

  }
}
