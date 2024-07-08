import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { FormStateService } from '../../../services/onboard-form-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  years: number[] = []
  registrationForm!: FormGroup

  constructor(private fb: FormBuilder, private formStateService: FormStateService , private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      reg_num: ['', Validators.required],
      reg_council: ['', Validators.required],
      reg_year: ['', Validators.required]
    })

    this.generateYears()
  }

  //function for generating years for registration year till 1929
  generateYears () {
    for(let i = 2024; i>=1929; i--) {
      this.years.push(i)
    }
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      //update the form
      this.formStateService.updateForm(this.registrationForm.value)

      //redirecting to the next page 
      this.router.navigate(['/partners/onboarding/education'])
    }
  }
}
