import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelos/personaModel';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona("","","","","")

  isLogged= false

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.personaService.traerPersona().subscribe(
      data=>{this.persona=data}
      )

      if(this.tokenService.getToken()){
        this.isLogged=true
      } else {
        this.isLogged = false
      }
  }

}
