import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/Modelos/idiomas';
import { IdiomasService } from 'src/app/Servicios/idiomas.service';

@Component({
  selector: 'app-crear-idioma',
  templateUrl: './crear-idioma.component.html',
  styleUrls: ['./crear-idioma.component.css']
})
export class CrearIdiomaComponent implements OnInit {

  idiom!: String
  oral!: number
  escrito!: number

  constructor(private idiomaService: IdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const lg = new Idiomas(this.idiom, this.oral, this.escrito);
    this.idiomaService.saveLanguage(lg).subscribe(
      data => {
        alert('Idioma añadido')
        this.router.navigate([''])
      }
    )
  }

}
