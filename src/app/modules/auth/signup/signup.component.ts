import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth-http.service';
import { passwordMatchValidator } from 'src/utils/validator/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  userType!: 'Doctor' | 'Patient' //userType
  signupForm!: FormGroup //Signup form 
  errorMessage!: string
  emailName!:string
  userId!: string

  showOtpComponent:boolean = false //This variable is for controlling the component of otp

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService){}

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.userType= params['userType'] as 'Doctor' | 'Patient'
     })

     this.signupForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required ]],
      terms:['', Validators.required],
     }, {validators: passwordMatchValidator})
  }

  //function on submiting the form passing to backend the form data
  onSubmit() :void{
    this.emailName = this.signupForm.value.email;//assigning the email to emailName to pass to otp page
    this.authService.signup(this.signupForm.value, this.userType)
      .subscribe(
        response => {
          console.log('Registration Successfull', response);
          this.showOtpComponent = true   //function to show otp component   
          this.userId = response.userId     
        },
        error => {
          console.error(error.error.message);
          this.errorMessage = error.error.message
        }
      )
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
          if (this.userType === 'Patient') {
            this.router.navigate(['/'])
          } else {
            this.router.navigate(['/partners/onboard/milestone'])
          }
        },
        (error) => {
          //Handle OTP  verification error
          alert('Wrong OTP Entered')
        } 
      )
  
  }
}

