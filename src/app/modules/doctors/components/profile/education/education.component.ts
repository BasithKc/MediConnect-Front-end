import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { FormGroup , ReactiveFormsModule, FormsModule, FormBuilder, Validators} from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormStateService } from '../../../services/onboard-form-state.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule, 
    CommonModule
    ]
})
export class EducationComponent implements OnInit{
  educationForm!:FormGroup
  years: number[] = []

 
  constructor (private fb: FormBuilder, private formStateService: FormStateService, private router: Router) {}

  ngOnInit(): void { 
    this.educationForm = this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      completionYear: ['', Validators.required],
      experience: ['', Validators.required],
    })

    this.generateYears()
  }

   //function for generating years for completion year till 1929
   generateYears () {
    for(let i = 2024; i>=1929; i--) {
      this.years.push(i)
    }
    
  }

  onSubmit() {
    //updating the form data
    if(this.educationForm.valid) {
      this.formStateService.updateForm(this.educationForm.value)
    //submit the data to backend and save in db
    this.formStateService.submitFormData('partners/profile/update').subscribe()

    //setting the form is completed
    this.formStateService.setFormCompleted(true)
    }

    this.router.navigate(['/partners/onboard/milestone'])
  }
}
