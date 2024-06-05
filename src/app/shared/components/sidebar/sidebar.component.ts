import { Component } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent{

  settings: boolean = false
  toggleSettings() {
    this.settings = !this.settings
    console.log(this.settings);
    
  }
}