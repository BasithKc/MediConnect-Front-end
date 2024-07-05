import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConsultHttpService } from "../../../services/consult-http.service";

@Component({
  selector: 'app-take-appointment',
  templateUrl: './tak-appointment.component.html',
  styleUrls: ['./take-appointment.component.css']
})

export class TakeAppointmentComponent implements OnInit{
  currentDate: Date = new Date();
  dates: Date[] = []
  selectedDate!: Date 
  times: string[] = ['10:00 AM', '11:00 AM', '12:00 AM']
  selectedTimeSlot!: string 
  showSuccesMsg: boolean = false
  doctor: any
  userToken: string | null = null

  constructor(private http: HttpClient, private route: ActivatedRoute, private consultService: ConsultHttpService, private router: Router) {}

  ngOnInit(): void {
    this.generateDates()

    this.route.params.subscribe(
      (param) => {
        this.consultService.findDocById(param['id']).subscribe(
          (data) => {
            this.doctor = data
            
          }
        )
      }
    )
    //get the user token
    this.userToken = this.consultService.getUserId()
  }

   //Generating next 5 dates
   generateDates() {
    this.dates = []
    for(let i =0; i<5; i++) {
      const date = new Date(this.currentDate)
      date.setDate(date.getDate() + i);
      this.dates.push(date)
    }
  }
 
    //Retrun the day name funtion
    getDayByName(date: Date): string {
      return date.toLocaleDateString('en-US', {weekday: 'short'})
    }
  
    //Return exact date 
    getDate(date: Date): number {
      return date.getDate()
    }
  
    //selecting a date
    selectDate(date: Date): void {
      this.selectedDate = date
    }

     //selecting a time
  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot = slot
  }

  onDone() {
    //showing the success message
    this.showSuccesMsg = true
    setTimeout( () => {
      this.showSuccesMsg= false
      this.router.navigate(['/appointments'])
    }, 3000)

    //creating an  appointment from backend
    this.consultService.createAppointment(this.selectedDate, this.selectedTimeSlot, this.doctor._id, this.userToken).subscribe()
  }
}