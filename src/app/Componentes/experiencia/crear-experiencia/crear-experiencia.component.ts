import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { Experiencia } from 'src/app/Modelos/experienciaModel';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {

  empresa: String = ""
  puesto: String = ""
  anioIngExp: String = ""
  anioEgExp: String = ""
  descripcionExp: String = ""

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia (this.empresa, this.puesto,this.anioIngExp, this.anioEgExp, this.descripcionExp)
    this.experienciaService.saveExpe(expe).subscribe(
      data=>{
        alert('Experiencia añadida')
        this.router.navigate([''])
      }
    )
  }

}
