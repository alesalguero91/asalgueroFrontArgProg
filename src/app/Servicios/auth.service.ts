import { Injectable } from '@angular/core';
import { login } from '../Modelos/login';
import { JwtDto } from '../Modelos/jwt-Dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'https://asalgueroargprogback.herokuapp.com/auth/'

  constructor(private http: HttpClient) { }

  public login(login: login):Observable<JwtDto>{
    return this.http.post<JwtDto>(this.URL+'login', login)
  }
}
