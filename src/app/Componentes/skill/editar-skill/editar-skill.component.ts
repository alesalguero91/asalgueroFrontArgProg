import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/Modelos/skills';
import { SkillService } from 'src/app/Servicios/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  constructor(private skillService:SkillService, private activatedRouter:ActivatedRoute, private router: Router) { }

  skill!: Skill
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.skillService.getSingleSkill(id).subscribe(
      data =>{
        this.skill=data
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id']
    this.skillService.updateSkill(id, this.skill).subscribe(
      data =>{
        alert('Actualizado')
        this.router.navigate([''])
      }
    )
  }

}
