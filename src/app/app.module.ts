import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { PersonaComponent } from './Componentes/persona/persona.component';
import { AcademicoComponent } from './Componentes/academico/academico.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { SkillComponent } from './Componentes/skill/skill.component';
import { IdiomasComponent } from './Componentes/idiomas/idiomas.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EditarPersonaComponent } from './Componentes/persona/editar-persona/editar-persona.component';
import { LogoApComponent } from './Componentes/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './Componentes/redes-sociales/redes-sociales.component';
import { CrearExperienciaComponent } from './Componentes/experiencia/crear-experiencia/crear-experiencia.component';
import { EditarExperienciaComponent } from './Componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { BotonVolverComponent } from './Componentes/boton-volver/boton-volver.component';
import { CrearAcademicoComponent } from './Componentes/academico/crear-academico/crear-academico.component';
import { EditarAcademicoComponent } from './Componentes/academico/editar-academico/editar-academico.component';
import { CrearSkillComponent } from './Componentes/skill/crear-skill/crear-skill.component';
import { EditarSkillComponent } from './Componentes/skill/editar-skill/editar-skill.component';
import { CrearIdiomaComponent } from './Componentes/idiomas/crear-idioma/crear-idioma.component';
import { EditarIdiomaComponent } from './Componentes/idiomas/editar-idioma/editar-idioma.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcercaDeMiComponent } from './Componentes/acerca-de-mi/acerca-de-mi.component';
import { PortBodyComponent } from './Componentes/port-body/port-body.component';
import { CrearProyectoComponent } from './Componentes/proyectos/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './Componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { OpcionesComponent } from './Componentes/opciones/opciones.component';
import { FooterComponent } from './Componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    PersonaComponent,
    AcademicoComponent,
    ExperienciaComponent,
    SkillComponent,
    IdiomasComponent,
    ProyectosComponent,
    LoginComponent,
    EditarPersonaComponent,
    LogoApComponent,
    RedesSocialesComponent,
    CrearExperienciaComponent,
    EditarExperienciaComponent,
    BotonVolverComponent,
    CrearAcademicoComponent,
    EditarAcademicoComponent,
    CrearSkillComponent,
    EditarSkillComponent,
    CrearIdiomaComponent,
    EditarIdiomaComponent,
    BannerComponent,
    AcercaDeMiComponent,
    PortBodyComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    OpcionesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
