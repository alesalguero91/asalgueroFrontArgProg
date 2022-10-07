import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/proyectoModel';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  nombreProy!: String
  detalleProy!: String
  imgProy!: String
  urlProy!: String

  constructor(private proyectoService: ProyectosService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(){
    const proy= new Proyecto(this.nombreProy, this.detalleProy, this.imgProy, this.urlProy)
    this.proyectoService.saveProyect(proy).subscribe(
      data => {
        alert('Proyecto añadido')
        this.router.navigate([''])
      }
    )
  }

}
