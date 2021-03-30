import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


import { HomeComponent } from './views/home/home.component';
import { NavtoolbarComponent } from './components/navtoolbar/navtoolbar.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ConsultaComponent } from './views/consulta/consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavtoolbarComponent,
    CadastroComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
