import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { InfoComponent } from './info/info.component';
import { InputFormComponent} from './input-form/input-form.component';
import { HistogramComponent } from './histogram/histogram.component';



const routes: Routes = [
  { path: "graph", component: GraphComponent },
  { path: "info", component: InfoComponent },
  { path: "inputform", component: InputFormComponent},
  { path: "histogram", component: HistogramComponent},
  { path: "", component: GraphComponent},
  { path: "**", component: GraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
