import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { OtpComponent } from "./otp/otp.component";
import {  provideClientHydration } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    OtpComponent,
    HeaderComponent
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [LoginComponent]
  
})
export class AuthModule {}