import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diseases } from 'src/app/shared/models/diseases';
import { DiseaseService } from 'src/app/shared/services/disease-service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent implements OnInit{
  disease!: Diseases | null
  showAdContent = true
  doctorsList: any = []
  user: any

  constructor(
    private route: ActivatedRoute, 
    private diseaseService: DiseaseService, 
    private http: HttpClient, 
    private userService: UserService) {}

  ngOnInit(): void {
    //finding the disease
    this.route.queryParams.subscribe(
      (query) => {
        this.disease = this.diseaseService.getDiseaseById(Number(query['id']))
      }
    )

    //binding the list of doctors from backend
    this.http.get('http://localhost:5000/consult/doctors-list/'+this.disease?.name ).subscribe(
      (res: any)=> {
        this.doctorsList = res.list //Doctrs list for the specific disease
      },
      (err)=> {
        console.log(err);
        
      }
    )


    //get the details of current user
    this.userService.userInfo$.subscribe(
      (res) => {
        console.log(res);
        
      }
    )
  }
  //show details of clicked doctor
  showDetails() {
    this.showAdContent = false
  }

}
