import { Component, OnInit } from '@angular/core';
import { Academico } from 'src/app/Modelos/academicoModel';
import { AcademicoService } from 'src/app/Servicios/academico.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.css']
})
export class AcademicoComponent implements OnInit {

  academico : Academico[] = []
  isLogged =false

  constructor(private academicoService: AcademicoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadAcademico()
    if(this.tokenService.getToken()){
      this.isLogged=true
    } else {
      this.isLogged = false
    }

  }

  loadAcademico(){
    this.academicoService.getAcademico().subscribe(
      data => (this.academico = data)
    )
    console.log(this.academico)
  }

  delete(id?: number){
    if(id != undefined){
      if(confirm("Estas seguro de eliminar?")){
        this.academicoService.deleteAcademico(id).subscribe(
          data => {
            alert ('Eliminado')
            this.academicoService.getAcademico().subscribe(
              data => ( this.academico = data)
            )
          }
        )
      }
    }
  }

  /*
   delete(id?:number){
    if(id != undefined){
      if(confirm("estas seguro de que quieres Eliminar")){
        this.experienciaService.deleteExp(id).subscribe(
          data =>{
            alert('Eliminado')
            this.experienciaService.getExperiencia().subscribe(
              data =>(this.experiencia = data)
            )
          }
        )
      }

    }
  }

  */
}
