import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Modelos/experienciaModel';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia : Experiencia [] = []

  isLogged=false

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadExperiencia()
    if(this.tokenService.getToken()){
      this.isLogged=true
    } else {
      this.isLogged = false
    }
  }

  loadExperiencia():void{
    this.experienciaService.getExperiencia().subscribe(
      data =>{this.experiencia = data}
    )
    console.log(this.experiencia)
  }

  delete(id?:number){
    if(id != undefined){
      if(confirm("estas seguro de que quieres Eliminar?")){
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

}
