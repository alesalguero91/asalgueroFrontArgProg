import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Modelos/proyectoModel';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[]=[]
  constructor(private proyectoService:ProyectosService, private token: TokenService) { }
  isLogged = false

  ngOnInit(): void {
    this.loadProyectos()
    if(this.token.getToken()){
      this.isLogged=true
    }else{
      this.isLogged=false
    }
  }

  loadProyectos(){
    this.proyectoService.getProyectos().subscribe(
      data => {
        this.proyecto= data
        console.log(this.proyecto)
      }

    )
  }

  delete(id?: number){
    if(id != undefined){
      if(confirm('Estas seguro de querer eliminar el proyecto?')){
        this.proyectoService.deleteProyect(id).subscribe(
          data => {
            alert('Eliminado')
            this.loadProyectos()
          }
        )
      }
    }
  }

}
