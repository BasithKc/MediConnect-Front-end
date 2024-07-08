import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  user: any
  showSettings: boolean = false

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe()
    //get the user details
    this.userService.userInfo$.subscribe((userInfo: any) => {
      this.user = userInfo?.user

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
