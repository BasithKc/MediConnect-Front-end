import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { FormGroup , ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms'
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule, 
    MatInputModule, 
    ]
})
export class EducationComponent {
  educationForm!:FormGroup

  constructor() {}
  onSubmit() {

  }
}
