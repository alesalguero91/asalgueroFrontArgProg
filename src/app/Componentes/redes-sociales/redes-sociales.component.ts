import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  isLogged=false;

  constructor(private router: Router, private tokenService:TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      //this.roles= this.tokenService.getAuthorities();
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logout();
    window.location.reload();
    this.router.navigate([''])
  }

  login(){
    this.router.navigate(['/login'])
  }

}
