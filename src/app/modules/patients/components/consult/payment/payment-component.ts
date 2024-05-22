import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

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
    FormsModule
  ],
})

export class ConsultPaymentComponent implements OnInit{
 
  paymentForm!: FormGroup
 
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

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
          console.log(response);
          
        },
        modal: {
          ondismiss: () => {
            console.log('dismissed');
            
          }
        },
      }

      const successCallback = (paymentId: any) => {
        console.log(paymentId);
        
      }

      const failureCallback = (e: any) => {
        console.log(e);
        
      }

      Razorpay.open(RazorpayOptions, successCallback, failureCallback)

    }
  }
 
}