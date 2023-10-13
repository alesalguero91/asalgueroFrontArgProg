import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelos/personaModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backendasal.onrender.com/persona/';

  constructor(private http: HttpClient) { }



  public traerPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+ 'perfil')
  }

  public getSinglePer(id: number):Observable<Persona>{
    return this.http.get<Persona>(this.URL+'buscar/'+id)

  }

  public update(id: number, persona:Persona):Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id, persona)
  }

}
