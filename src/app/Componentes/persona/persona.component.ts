import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelos/personaModel';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona("","","","","")

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.traerPersona().subscribe(
      data=>{this.persona=data}
      )
      console.log(this.persona)
  }

}
