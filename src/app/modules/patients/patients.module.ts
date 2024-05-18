import { NgModule } from "@angular/core";
import { DiseaseComponent } from "./components/diseases/disease-component";
import { PatientHomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PatinetsRoutingModule } from "./routing.module";
import { provideClientHydration } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConsultVerifyComponent } from "./components/consult/verify/verify-component";


@NgModule({
  declarations:[
    // components
    PatientHomeComponent,
    DiseaseComponent,
    ConsultVerifyComponent,
  ],
  imports: [
    PatinetsRoutingModule,
    CommonModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
  ],

})

export class PatientModule {}