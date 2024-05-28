import { RouterModule, Routes } from "@angular/router";
import { PatientHomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { ConsultVerifyComponent } from "./components/consult/verify/verify-component";
import { ConsultPaymentComponent } from "./components/consult/payment/payment-component";
import { videoHomeComponent } from "./components/consult/call-video-chat/home/video-home.component";
import { VideoRoomComponent } from "./components/consult/call-video-chat/room/room-component";


const routes :Routes = [
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
      {path: 'video-home', component: videoHomeComponent},
      {path: 'video-room/:roomId', component: VideoRoomComponent}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatinetsRoutingModule {}