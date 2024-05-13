import { NgModule } from "@angular/core";
import { DiseaseComponent } from "./components/diseases/disease-component";
import { PatientHomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PatinetsRoutingModule } from "./routing.module";


@NgModule({
  declarations:[
    // components
    DiseaseComponent,
    PatientHomeComponent,
  ],
  imports: [
    PatinetsRoutingModule,
    CommonModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    
  ],

})

export class PatientModule {}