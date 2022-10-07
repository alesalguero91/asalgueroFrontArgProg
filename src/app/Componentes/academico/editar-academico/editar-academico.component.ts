import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Academico } from 'src/app/Modelos/academicoModel';
import { AcademicoService } from 'src/app/Servicios/academico.service';

@Component({
  selector: 'app-editar-academico',
  templateUrl: './editar-academico.component.html',
  styleUrls: ['./editar-academico.component.css']
})
export class EditarAcademicoComponent implements OnInit {

  constructor(private academicoService:AcademicoService, public activatedRouter:ActivatedRoute, public router: Router) { }

  academico!: Academico

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.academicoService.getSingleAcademico(id).subscribe(
      data => { this.academico = data}
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.academicoService.updateAcademico(id, this.academico).subscribe(
      data =>{
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
