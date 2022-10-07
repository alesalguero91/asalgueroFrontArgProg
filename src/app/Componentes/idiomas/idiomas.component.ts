import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/Modelos/idiomas';
import { IdiomasService } from 'src/app/Servicios/idiomas.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas: Idiomas [] = []
  isLogged= false

  constructor(private idiomaService: IdiomasService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadLanguages()

    if(this.tokenService.getToken()){
      this.isLogged=true
    } else {
      this.isLogged = false
    }
  }

  loadLanguages(){
    this.idiomaService.getLaguages().subscribe(
      data => {
        this.idiomas= data
        console.log(this.idiomas)
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      if(confirm('Estas seguro que desea eliminar?')){
        this.idiomaService.deleteLanguage(id).subscribe(
          data => {
            alert('Eliminado')
            this.loadLanguages()
          }
        )
      }
    }
  }

}
