import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/proyectoModel';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  proyecto!: Proyecto
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectoService.getSingleProyect(id).subscribe(
      data =>{
        this.proyecto= data
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectoService.editProyect(id, this.proyecto).subscribe(
      data => {
        alert('Actualizado')
        this.router.navigate([''])
      }
    )
  }

}
