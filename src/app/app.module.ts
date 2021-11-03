import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { ModeloComponent } from './modelo/modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    ModeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
