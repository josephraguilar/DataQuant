import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GraphDispComponent } from './graph-disp/graph-disp.component';
import { InfoDispComponent } from './info-disp/info-disp.component';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    GraphDispComponent,
    InfoDispComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
