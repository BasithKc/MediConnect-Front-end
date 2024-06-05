import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FirstPageComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FirstPageComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers:[UserService]
})

export class SharedModule {}