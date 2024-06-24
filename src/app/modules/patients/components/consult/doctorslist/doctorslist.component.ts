import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diseases } from 'src/app/shared/models/diseases';
import { DiseaseService } from 'src/app/shared/services/disease-service';

@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent implements OnInit{
  disease!: Diseases | null
  showAdContent = false
  currentDate: Date = new Date();
  dates: Date[] = []
  selectedDate: Date | null = null
  times: string[] = ['10:00 AM', '11:00 AM', '12:00 AM']
  selectedTimeSlot: string | null = null

  constructor(private route: ActivatedRoute, private diseaseService: DiseaseService, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      (query) => {
        this.disease = this.diseaseService.getDiseaseById(Number(query['id']))
      }
    )

    this.http.get('http://localhost:5000/consult/doctors-list?'+this.disease?.name ).subscribe()
    
    this.generateDates()
  }
  //show details of clicked doctor
  showDetails() {
    this.showAdContent = false
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
    console.log('date:', this.selectedDate, 'time:', this.selectedTimeSlot);
    
  }
}
