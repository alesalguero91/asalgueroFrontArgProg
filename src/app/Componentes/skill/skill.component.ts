import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Modelos/skills';
import { SkillService } from 'src/app/Servicios/skill.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill[]=[]

  isLogged= false

  constructor(private skillService:SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadSkills()

    if(this.tokenService.getToken()){
      this.isLogged=true
    } else {
      this.isLogged = false
    }
  }

  loadSkills(){
    this.skillService.getSkill().subscribe(
      data=> (this.skill = data)
    )
  }

  delete(id?: number){
    if(id != undefined){
      if(confirm('Estas seguro que desea eliminar Skill?')){
        this.skillService.deleteSkill(id).subscribe(
          data =>{
            alert('Eliminado')
            this.loadSkills()
          }
        )
      }
    }
  }

  /*
   delete(id?:number){
    if(id != undefined){
      if(confirm("estas seguro de que quieres Eliminar")){
        this.experienciaService.deleteExp(id).subscribe(
          data =>{
            alert('Eliminado')
            this.experienciaService.getExperiencia().subscribe(
              data =>(this.experiencia = data)
            )
          }
        )
      }

    }
  }

  */

}
