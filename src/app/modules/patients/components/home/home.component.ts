import { Component, OnInit } from "@angular/core";
import { Diseases } from "../../models/diseases";
import { DiseaseService } from "src/app/services/home/disease-service";

@Component({
  selector: 'app-patient-home',
  templateUrl: './home.component.html'
})

export class PatientHomeComponent implements OnInit{
  diseases!: Diseases[]

  constructor(private diseaseService: DiseaseService){}

  ngOnInit(): void {
    this.diseaseService.getDieseases().subscribe(disease => {
      console.log(disease);
      
      this.diseases = disease
    })
  }
}