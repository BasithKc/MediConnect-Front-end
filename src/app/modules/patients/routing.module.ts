import { RouterModule, Routes } from "@angular/router";
import { PatientHomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { ConsultComponent } from "./components/consult/consult-component";


const routes :Routes = [
  {path: '', component: PatientHomeComponent},
  {path: 'consult/direct/new_consultation', component: ConsultComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatinetsRoutingModule {}