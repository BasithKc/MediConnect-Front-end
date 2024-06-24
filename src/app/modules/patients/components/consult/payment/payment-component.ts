import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ActivatedRoute, Router } from "@angular/router";
import { Diseases } from "src/app/shared/models/diseases";
import { UserService } from "src/app/shared/services/user.service";


//razorpay
declare var Razorpay: any

@Component({
  selector: "app-consult-payment",
  templateUrl: './payment-component.html',
  styleUrls: ['../../home/home.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})

export class ConsultPaymentComponent implements OnInit{
 
  paymentForm!: FormGroup
  user: any
  disease!: Diseases | null
  id!: number

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    //extracting the id
    this.route.queryParams.subscribe(
      (query) => {
        this.id = query['id']
        console.log(this.id);
        
      }
    )
    //save the user details
    this.userService.userInfo$.subscribe(
      (userInfo: any)=> {
        this.user = userInfo?.user
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  //after clicking on continue to payment button
  paymentSubmit () {
    if(this.paymentForm.valid) { //chdcking if the form is valid

      const RazorpayOptions = { //razorpay configuration option
        description: 'Service Fee',
        currency: "INR",
        amount: 25000,
        name: 'MediConnect',
        key: 'rzp_test_p8rrN5NptRVy5W',
        image: '../../../../../../assets/images/photo-1554734867-bf3c00a49371.jpeg',
        prefill: {
          name: 'basith',
          email: 'basithkccr7@gmail.com'
        },
        theme: {
          color: '#f37254'
        },
        handler: (response: any) => {
          this.router.navigate([`/consult/doctors-list`], {
            queryParams: { id: this.id }
          })
        },
        modal: {
          ondismiss: () => {
            console.log('dismissed');
            
          }
        },
      }

      //call back function for success payment
      const successCallback = (paymentId: any) => {
        console.log(paymentId);
        
      }
      //call back function for failure payment
      const failureCallback = (e: any) => {
        console.log(e);
        
      }

      Razorpay.open(RazorpayOptions, successCallback, failureCallback)

    }
  }

  
}