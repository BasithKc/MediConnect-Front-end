import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{

  settings: boolean = false
  user: User | null = null

  constructor (private userService : UserService) {}

  toggleSettings() {
    this.settings = !this.settings
    
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe()
    this.userService.userInfo$.subscribe(
      (userInfo: any) => {
        
        this.user = userInfo.user
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

}