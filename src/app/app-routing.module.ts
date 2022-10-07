import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAcademicoComponent } from './Componentes/academico/crear-academico/crear-academico.component';
import { EditarAcademicoComponent } from './Componentes/academico/editar-academico/editar-academico.component';
import { CrearExperienciaComponent } from './Componentes/experiencia/crear-experiencia/crear-experiencia.component';
import { EditarExperienciaComponent } from './Componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { CrearIdiomaComponent } from './Componentes/idiomas/crear-idioma/crear-idioma.component';
import { EditarIdiomaComponent } from './Componentes/idiomas/editar-idioma/editar-idioma.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EditarPersonaComponent } from './Componentes/persona/editar-persona/editar-persona.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { CrearProyectoComponent } from './Componentes/proyectos/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './Componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { CrearSkillComponent } from './Componentes/skill/crear-skill/crear-skill.component';
import { EditarSkillComponent } from './Componentes/skill/editar-skill/editar-skill.component';

const routes: Routes = [
  { path: '', component:PortfolioComponent},
  { path: 'editarPersona/:id', component:EditarPersonaComponent},
  { path: 'login', component:LoginComponent},
  { path: 'crearExperiencia', component:CrearExperienciaComponent},
  { path: 'editarExperiencia/:id', component:EditarExperienciaComponent},
  { path: 'crearAcademico', component:CrearAcademicoComponent},
  { path: 'editarAcademico/:id', component:EditarAcademicoComponent},
  { path: 'crearSkill', component:CrearSkillComponent},
  { path: 'editarSkill/:id', component:EditarSkillComponent},
  { path: 'crearIdioma', component: CrearIdiomaComponent},
  { path: 'editarIdioma/:id', component:EditarIdiomaComponent},
  { path: 'crearProyecto', component:CrearProyectoComponent},
  { path: 'editarProyecto/:id', component:EditarProyectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
