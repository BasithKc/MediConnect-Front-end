import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit{
  user: User | null = null
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //get the user details
    this.userService.userInfo$.subscribe(userInfo => {
      this.user = userInfo
    })
    
  }
}
