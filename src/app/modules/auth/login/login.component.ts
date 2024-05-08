import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../utils/validator/password-validator';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType!: 'Doctor' | 'Patient'; //userType as union type to make sure the value is either "Doctor" or "Patient".
  loginForm!: FormGroup
  errorMsg!: string

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit(): void {
      
    //Subscribing to params to retrieve the type of user
    this.route.params.subscribe(params => {  
      this.userType= params['userType'] as 'Doctor' | 'Patient'
    })

    // Form validation using formBuilder
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      rememberMe:[false]
    }, {validator: passwordMatchValidator})
  }

  onSubmit() {
    this.authService.login(this.loginForm.value, this.userType)
      .subscribe(
        response => {
          //Handle successfull login
          const jwtToken = response.token
          localStorage.setItem('token', jwtToken) //setting jwt token in local storage for subsequent request authentication
          this.router.navigate(['patient-page'])
        },
        error => {
          console.error(error);
          this.errorMsg = error.error.message
        }
      )
  }

  //method for changing the remember me option if user clicked on it
  toggleRememberMe () {
    const currentValue = this.loginForm.get('rememberMe')?.value
    this.loginForm.get('rememberMe')?.setValue(!currentValue)
  }
  
}
