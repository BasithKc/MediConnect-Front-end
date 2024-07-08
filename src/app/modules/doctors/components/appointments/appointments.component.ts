import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit{
  appointments: any

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {

    this.userService.userInfo$.subscribe(
      (userInfo:any) => {
        // Retrieve the appointment details
        this.http.get('http://localhost:5000/consult/appointments/'+ userInfo.user._id).subscribe(
          (appointment: any) => {
            this.appointments = appointment
            
          }
        )        
      }
    )

  }

  formatDate(date: Date) {
    let dateObject = new Date(date)
    // Array of month names 
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Extracting the month, day, and year
    let month = monthNames[dateObject.getMonth()];
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();

    // Formatting the date
    return  `${month}-${day < 10 ? '0' + day : day}-${year}`;

  }
}
