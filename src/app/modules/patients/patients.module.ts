import { NgModule } from "@angular/core";
import { DiseaseComponent } from "./components/diseases/disease-component";
import { PatientHomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PatinetsRoutingModule } from "./routing.module";
import { ConsultComponent } from "./components/consult/consult-component";
import { provideClientHydration } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations:[
    // components
    DiseaseComponent,
    PatientHomeComponent,
    ConsultComponent
  ],
  imports: [
    PatinetsRoutingModule,
    CommonModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
  ],

})

export class PatientModule {}