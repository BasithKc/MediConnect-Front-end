import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { OtpComponent } from "./otp/otp.component";
import {  provideClientHydration } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { TokenInterceptor } from "src/app/modules/auth/services/token.interceptor";

import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpComponent,
    
  ],
  imports: [
    // PatientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule, 
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [LoginComponent],
  
})
export class AuthModule {}