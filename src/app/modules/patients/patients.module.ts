import { NgModule } from "@angular/core";
import { DiseaseComponent } from "./components/diseases/disease-component";
import { PatientHomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PatinetsRoutingModule } from "./routing.module";
import { provideClientHydration } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ConsultVerifyComponent } from "./components/consult/verify/verify-component";
import { ConsultPaymentComponent } from "./components/consult/payment/payment-component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { videoHomeComponent } from "./components/consult/call-video-chat/home/video-home.component";
import { VideoRoomComponent } from "./components/consult/call-video-chat/room/room-component";
import { PatientLayoutComponent } from "./components/layout/patient-layout";


@NgModule({
  declarations:[
    PatientHomeComponent,
    DiseaseComponent,
    ConsultVerifyComponent,
    VideoRoomComponent,
    PatientLayoutComponent
  ],
  imports: [
    videoHomeComponent,
    ConsultPaymentComponent,
    PatinetsRoutingModule,
    CommonModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
  ],

})

export class PatientModule {}