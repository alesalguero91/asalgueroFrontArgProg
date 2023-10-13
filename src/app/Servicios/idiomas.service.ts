import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idiomas } from '../Modelos/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  URL = 'https://backendasal.onrender.com/idioma/'

  constructor(private http: HttpClient) { }

  public getLaguages():Observable<Idiomas[]>{
    return this.http.get<Idiomas[]>(this.URL+'traer')
  }

  public saveLanguage(idioma: Idiomas):Observable<any>{
    return this.http.post<any>(this.URL+'crear', idioma)
  }

  public deleteLanguage(id: number):Observable<any>{
    return this.http.delete<any>(this.URL+'borrar/'+id)
  }

  public getSingleLang(id: number): Observable<Idiomas>{
    return this.http.get<Idiomas>(this.URL+'buscar/'+id)
  }

  public updateLanguage(id:number, idioma:Idiomas):Observable<any>{
    return this.http.put<any>(this.URL+'editar/'+id, idioma)
  }

}
