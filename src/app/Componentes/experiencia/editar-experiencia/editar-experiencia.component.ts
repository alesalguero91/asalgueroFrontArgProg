import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experienciaModel';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  experiencia!: Experiencia
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.getSingleExp(id).subscribe(data => {
      this.experiencia = data
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.updateExp(id, this.experiencia).subscribe(
      data => {
        this.router.navigate([''])
      }
    )
  }

  /*
  onUpdate():void{
    const idExp = this.activatedRoute.snapshot.params['idExp'];
    this.experienciaService.update(idExp, this.experiencia).subscribe(
      data => {
        this.router.navigate([''])
      }
    )
  }
  */

}
