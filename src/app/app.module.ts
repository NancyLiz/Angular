import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { MenuComponent } from './menu/menu.component';
import { OrionComponent } from './orion/orion.component';
import { WirecloudComponent } from './wirecloud/wirecloud.component';
import { KnowageComponent } from './knowage/knowage.component';
import { WilmaComponent } from './wilma/wilma.component';
import { KeyrockComponent } from './keyrock/keyrock.component';
import { AuthzforceComponent } from './authzforce/authzforce.component';
import { AeonComponent } from './aeon/aeon.component';
import { BotonComponent } from './boton/boton.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { Boton2Component } from './boton2/boton2.component';



@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    MenuComponent,
    OrionComponent,
    WirecloudComponent,
    KnowageComponent,
    WilmaComponent,
    KeyrockComponent,
    AuthzforceComponent,
    AeonComponent,
    BotonComponent,
    CheckboxComponent,
    Boton2Component,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
