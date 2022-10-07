import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/Modelos/idiomas';
import { IdiomasService } from 'src/app/Servicios/idiomas.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.css']
})
export class EditarIdiomaComponent implements OnInit {


  constructor(private idiomaService: IdiomasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  idioma!: Idiomas
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.idiomaService.getSingleLang(id).subscribe(
      data => {
        this.idioma= data
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.idiomaService.updateLanguage(id, this.idioma).subscribe(
      data => {
        alert('Actualizado')
        this.router.navigate(['/portafolio'])
      }
    )
  }

}
