import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/shared/services/disease-service';
import { Diseases } from 'src/app/shared/models/diseases';
import {FormBuilder ,FormGroup, Validators} from "@angular/forms";
import { FormStateService } from '../../../services/onboard-form-state.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';




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
    private router: Router,
    private userService: UserService) {}

  diseases!: Diseases[]
  user!: Doctor

  ngOnInit(): void {
    this.diseaseService.getDieseases().subscribe(disease => {
      this.diseases = disease
    })
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      gender: ['', Validators.required]
    })

    //getting the user details
    this.userService.userInfo$.subscribe(
      (userInfo: any) => {
        this.user = userInfo.user
        
      }
    )
  }
  onSubmit() {
    if(this.profileForm.valid) {
      this.formStateService.updateForm(this.profileForm.value)//updating the form data using update form Service

      this.router.navigate(['/partners/onboarding/registration'])
    }
  }
}

interface Doctor {
  _id: string,
  name: string,
  password: string,
  role: string
}