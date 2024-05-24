import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    HeaderComponent,
    FirstPageComponent
  ],
  exports: [
    HeaderComponent,
    FirstPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers:[UserService]
})

export class SharedModule {}