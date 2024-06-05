import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/shared/services/disease-service';
import { Diseases } from 'src/app/shared/models/diseases';
import {FormBuilder ,FormGroup, Validators} from "@angular/forms";
import { FormStateService } from '../../../services/onboard-form-state.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit{

  profileForm!: FormGroup

  constructor(
    private diseaseService: DiseaseService, 
    private formBuilder: FormBuilder,
    private formStateService: FormStateService,
    private router: Router) {}

  diseases!: Diseases[]

  ngOnInit(): void {
    this.diseaseService.getDieseases().subscribe(disease => {
      this.diseases = disease
    })
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }
  onSubmit() {
    if(this.profileForm.valid) {
      this.formStateService.updateForm(this.profileForm.value)//updating the form data using update form Service

      this.router.navigate(['/partners/onboarding/registration'])
    }
  }
}
