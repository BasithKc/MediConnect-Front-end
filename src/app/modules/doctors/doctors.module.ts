import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { HomeComponent } from './components/home/home.component';
import { OnboardMilestoneComponent } from './components/profile/onboard-milestone/onboard-milestone.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorLayoutComponent } from './components/layout/doctor-layout/doctor-layout';
import { RouterModule } from '@angular/router';
import { OnboardComponent } from './components/profile/onboard/onboard.component';
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/profile/registration/registration.component';
import { OnboardingheaderComponent } from './components/layout/onboardingheader/onboardingheader.component';
import { EducationComponent } from './components/profile/education/education.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';




@NgModule({
  declarations: [
    HomeComponent,
    AppointmentsComponent,
    OnboardMilestoneComponent,
    DoctorLayoutComponent,
    OnboardComponent,
    RegistrationComponent,
    OnboardingheaderComponent,
  ],
  imports: [
    EducationComponent,
    CommonModule,
    DoctorsRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // UserService
  ]
})
export class DoctorsModule { }
