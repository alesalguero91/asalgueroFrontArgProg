import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../Modelos/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL= "http://localhost:8080/skill/"
  constructor(private http: HttpClient) { }

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL+'traer')
  }

  public saveSkill(skill: Skill):Observable<any>{
    return this.http.post<any>(this.URL+'crear', skill)
  }

  public deleteSkill(id: number):Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/'+ id)
  }

  public getSingleSkill(id: number):Observable<Skill>{
    return this.http.get<Skill>(this.URL+'buscar/'+id)
  }

  public updateSkill(id: number, skill: Skill):Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id, skill)
  }

}
