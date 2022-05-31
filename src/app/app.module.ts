import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PieComponent } from './pie/pie.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { UnirmeComponent } from './unirme/unirme.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent } from './contacto/contacto.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PieComponent,
    PlantillaComponent,
    UnirmeComponent,
    InicioSesionComponent,
    NoticiasComponent,
    ReservasComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




