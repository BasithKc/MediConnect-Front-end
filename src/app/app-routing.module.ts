import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './shared/components/first-page/first-page.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
