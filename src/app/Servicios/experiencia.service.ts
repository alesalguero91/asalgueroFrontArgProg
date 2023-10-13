import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../Modelos/experienciaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://backendasal.onrender.com/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+ 'traer')
  }

  public saveExpe(experiencia: Experiencia):Observable<any>{
    return this.http.post<any>(this.URL+'crear', experiencia)
  }

  public deleteExp(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/'+id)
  }

  public getSingleExp(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL+'buscar/'+id)
  }

  public updateExp(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id,experiencia)
  }
}
