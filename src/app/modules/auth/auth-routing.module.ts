import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path: 'login/:userType', component: LoginComponent},
  {path: 'register/:userType', component: SignupComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }