import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/skills';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-crear-skill',
  templateUrl: './crear-skill.component.html',
  styleUrls: ['./crear-skill.component.css']
})
export class CrearSkillComponent implements OnInit {

  herramienta!: String
  nivel!: number


  constructor(private skillService: SkillService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const skill = new Skill(this.herramienta, this.nivel)
    this.skillService.saveSkill(skill).subscribe(
      data =>{
        alert('Skill añadida')
        this.router.navigate([''])
      }
    )
  }
}
