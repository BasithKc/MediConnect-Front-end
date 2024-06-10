import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '',
    loadChildren: () => import('./modules/patients/patients.module').then((m) => m.PatientModule)
  },
  {path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'partners',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/doctors/doctors.module').then((m) => m.DoctorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
