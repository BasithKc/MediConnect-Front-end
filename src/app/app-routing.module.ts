import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './shared/components/first-page/first-page.component';

const routes: Routes = [
  {path: 'signin', component: FirstPageComponent},
  {path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {path: '',
    loadChildren: () => import('./modules/patients/patients.module').then((m) => m.PatientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
