import { Component, OnInit } from "@angular/core";
import { Diseases } from "../../models/diseases";
import { DiseaseService } from "src/app/modules/patients/services/disease-service";

@Component({
  selector: 'app-patient-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PatientHomeComponent implements OnInit{
  diseases!: Diseases[]
  imgSrc = '../../../../../assets/images/freepik-export-20240513115338P7dn.png'
  constructor(private diseaseService: DiseaseService){}

  ngOnInit(): void {
    this.diseaseService.getDieseases().subscribe(disease => {
      console.log(disease);
      
      this.diseases = disease
    })
  }
}