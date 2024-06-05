import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OnboardMilestoneComponent } from "./components/profile/onboard-milestone/onboard-milestone.component";
import { DoctorLayoutComponent } from "./components/layout/doctor-layout/doctor-layout";
import { OnboardComponent } from "./components/profile/onboard/onboard.component";
import { RegistrationComponent } from "./components/profile/registration/registration.component";
import { OnboardingheaderComponent } from "./components/layout/onboardingheader/onboardingheader.component";
import { EducationComponent } from "./components/profile/education/education.component";

const routes: Routes = [
  {
    path: '',
    component: DoctorLayoutComponent,
    children: [
      {path: 'onboard', component: OnboardComponent},
      {path: 'onboard/milestone', component: OnboardMilestoneComponent}
    ]
  },
  {
    path: 'onboarding',
    component: OnboardingheaderComponent,
    children:[
      {path: 'registration', component: RegistrationComponent},
      {path: 'education', component: EducationComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class DoctorsRoutingModule {}