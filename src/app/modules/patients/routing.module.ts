import { RouterModule, Routes } from "@angular/router";
import { PatientHomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { ConsultVerifyComponent } from "./components/consult/verify/verify-component";
import { ConsultPaymentComponent } from "./components/consult/payment/payment-component";
import { VideoRoomComponent } from "./components/consult/call-video-chat/room/room-component";
import { PatientLayoutComponent } from "./components/layout/patient-layout";
import { DoctorslistComponent } from "./components/consult/doctorslist/doctorslist.component";
import { TakeAppointmentComponent } from "./components/consult/takeAppointment/tak-appointment.component";


const routes :Routes = [
  {path: '', component: PatientLayoutComponent, children: [
    {path: '', component: PatientHomeComponent},

    {
      path: 'consult/direct',
      children:[
        {path: 'new_consultation', component: ConsultVerifyComponent},
        {path: 'payment', component: ConsultPaymentComponent}
      ]
    },
    {path: 'consult',
      children:[
        {path: 'doctors', component: DoctorslistComponent,
          children:[
            {path: ':id', component: TakeAppointmentComponent}
          ]
        },
        {path: 'video-room', component: VideoRoomComponent}
      ]
    }
  ]},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatinetsRoutingModule {}