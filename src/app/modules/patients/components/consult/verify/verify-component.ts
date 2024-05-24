import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VerifyService } from "../../../services/verify.service";
import { DiseaseService } from "../../../services/disease-service";
import { Diseases } from "../../../models/diseases";
import { UserService } from "src/app/shared/services/user.service";
import { User } from "src/app/models/user";
import { AuthenticationService } from "src/app/modules/auth/services/authentication.service";

@Component({
  selector: 'app-consult-verify',
  templateUrl: './verify-component.html'
})

export class ConsultVerifyComponent implements OnInit{
  currentIndex = 0;
  consultForm! : FormGroup
  user!: User | null;
  disease!: Diseases | null
  id!: string
  emailName!: string
  userId!: string

  showOtpComponent:boolean = false

  //divs of changing banners in the template
  divs = [
    {
      imageSrc: '../../../../../assets/images/qualified_doctors.webp',
      text: 'Verified Doctors'
    },
    {
      imageSrc: '../../../../../assets/images/ic-chats-v1.webp',
      text: 'Free Follow-up'
    },
    {
      imageSrc: '../../../../../assets/images/ic-security-v1.webp',
      text: 'Private & Secure'
    }
  ]
  
  constructor(
    private route: ActivatedRoute,
    private diseaseService: DiseaseService,
    private formBuilder: FormBuilder,
    private verifyService: VerifyService,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.divs.length
    },2000)
  }



 //access the disease using id
 ngOnInit(): void {
  //extracting the id from queryparams
    this.route.queryParams.subscribe((query) => { 
      this.id = query['id']
      
     this.disease =  this.diseaseService.getDiseaseById(Number(this.id))
     
    })

    //Creating a form validation 
    this.consultForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    
    this.userService.userInfo$.subscribe(userInfo => {
      this.user = userInfo
      console.log(this.user);
      
    })
  
  }

  //on clicking on continue to payment button
  onSubmit() {

    if(this.user) {
      this.router.navigate(['/consult/direct/payment'], {
        queryParams: {id: this.id }
      })

    } else {
      this.showOtpComponent = true    
      // sending a request to backend for number verification
      this.verifyService.verifyEmail(this.consultForm.value, this.disease).subscribe(
        (response) => {
          this.userId = response.userId
          console.log('successfull');
          
        },
        (error) => {
          console.log(error)
        }
      )

    }
  }

  onOtpClose(event: string) {
    this.showOtpComponent = false
  }

  onOtpSubmitted(event: string) {
    const otpValue: string = event

    //send the otp to server to verification
    this.authService.verifyOtp(otpValue, this.userId)
      .subscribe(
        (response) => {
          //Handle successfull otp verification
          const jwtToken = response.token //server returns a jwt token          
          localStorage.setItem('token', jwtToken)//setting jwt token in local storage for subsequent request authentication
          this.showOtpComponent = false //removing the otp component from the view

        },
        (error) => {
          //Handle OTP  verification error
          alert('Wrong OTP Entered')
        } 
      )
  
  
  }
}