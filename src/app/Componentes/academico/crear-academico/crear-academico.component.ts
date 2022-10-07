import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicoService } from 'src/app/Servicios/academico.service';
import { Academico } from 'src/app/Modelos/academicoModel';

@Component({
  selector: 'app-crear-academico',
  templateUrl: './crear-academico.component.html',
  styleUrls: ['./crear-academico.component.css']
})
export class CrearAcademicoComponent implements OnInit {


  titulo: String = ""
  establecimiento: String= ""
  anioIngAcad: String= ""
  anioEgAcad: String= ""
  promedio: String= ""
  finalizado: String= ""

  constructor(private academicoService: AcademicoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const acad = new Academico(this.titulo, this.establecimiento,this.anioIngAcad, this.anioEgAcad,this.promedio,this.finalizado)
    this.academicoService.saveAcademico(acad).subscribe(
      data =>{
        this.router.navigate([''])
        alert('Academico añadido')
      }
    )
  }

}
