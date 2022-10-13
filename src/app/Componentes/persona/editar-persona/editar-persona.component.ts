import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaModel';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {



  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  persona!: Persona

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.personaService.getSinglePer(id).subscribe(
      data => {this.persona = data}

    )
    console.log(this.persona)
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id']
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert('Perfil Actualizado')
        this.router.navigate([''])
      }
    )
  }


}
