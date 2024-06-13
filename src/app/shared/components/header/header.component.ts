import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit{
  user: User | null = null
  showSettings: boolean = false
  
  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (res) => {
        console.log('successull');       
      }
    )
    //get the user details
    this.userService.userInfo$.subscribe((userInfo :any) => {      
      this.user = userInfo.user
      
    })
    
  }

  toggleSettings() {
    this.showSettings = !this.showSettings
  }

  //function for logout
  logout() {
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
