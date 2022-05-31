import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { UnirmeComponent } from './unirme/unirme.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  
  {path: 'plantilla', component: PlantillaComponent},
  {path: 'unirme', component: UnirmeComponent},
  {path: 'iniciarSesion', component: InicioSesionComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '', component:InicioComponent},  //no se pone ninguna ruta
  {path: '**', redirectTo:'/' } //se indica una ruta que no existe
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
