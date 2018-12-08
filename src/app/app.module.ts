import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphComponent } from './graph/graph.component';
import { InfoComponent } from './info/info.component';
import { MaterialModule } from './material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    InputFormComponent,
    GraphComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
