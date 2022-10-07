import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Modelos/proyectoModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://asalgueroargprogback.herokuapp.com/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL+"traer")
  }

  public getSingleProyect(id: number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL+'buscar/'+id)
  }

  public saveProyect(proyecto: Proyecto):Observable<any>{
    return this.http.post<any>(this.URL+'crear',proyecto)
  }

  public editProyect(id: number, proyecto:Proyecto): Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id, proyecto)
  }

  public deleteProyect(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/'+id)
  }
}
