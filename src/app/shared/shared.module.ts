import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { RouterModule } from "@angular/router";

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
    RouterModule
  ]
})

export class SharedModule {}