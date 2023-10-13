import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academico } from '../Modelos/academicoModel';

@Injectable({
  providedIn: 'root'
})
export class AcademicoService {

  URL = 'https://backendasal.onrender.com/academico/';



  constructor(private http: HttpClient) { }

  public getAcademico():Observable<Academico[]>{
    return this.http.get<Academico[]>(this.URL+'traer')
  }

  public saveAcademico(academico: Academico):Observable<any>{
    return this.http.post<any>(this.URL+ 'crear', academico)
  }

  public deleteAcademico(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/'+id)
  }

  public getSingleAcademico(id:number):Observable<Academico>{
    return this.http.get<Academico>(this.URL+'buscar/'+id)
  }

  public updateAcademico(id:number, academico:Academico):Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id, academico)
  }

}
