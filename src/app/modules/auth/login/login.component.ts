import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../utils/validator/password-validator';
import { AuthenticationService } from '../services/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType!: 'Doctor' | 'Patient'; //userType as union type to make sure the value is either "Doctor" or "Patient".
  loginForm!: FormGroup
  errorMsg!: string
  emailName!:string
  userId!: string
  showOtpComponent: boolean = false

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit(): void {
      
   

    // Form validation using formBuilder
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      rememberMe:[false]
    }, {validator: passwordMatchValidator})
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .subscribe(
        response => {
          //Handle successfull login
          const jwtToken = response.token
          localStorage.setItem('token', jwtToken) //setting jwt token in local storage for subsequent request authentication
          console.log(response);
          
          if(response.email) {
            this.emailName = response.email;//assigning the email to emailName to pass to otp page
            this.userId = response.userId
            this.showOtpComponent = true
          }
          this.router.navigate([`/`])
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

  //function for closing the otp tab if user clicks on close button
  onOtpClose(event:string){
    this.showOtpComponent = false
  }

  onOtpSubmitted(event:string){
    const otpValue: string = event

    //send the otp to server to verification
    this.authService.verifyOtp(otpValue, this.userId)
      .subscribe(
        (response) => {
          //Handle successfull otp verification
          const jwtToken = response.token //server returns a jwt token          
          localStorage.setItem('token', jwtToken)//setting jwt token in local storage for subsequent request authentication
          this.showOtpComponent = false //removing the otp component from the view
          
          //redirect to home page
          
            this.router.navigate([`/`])
          
        },
        (error) => {
          //Handle OTP  verification error
          alert('Wrong OTP Entered')
        } 
      )
  
  }

}
