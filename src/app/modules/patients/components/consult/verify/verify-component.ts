import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VerifyService } from "../../../services/verify.service";
import { DiseaseService } from "../../../services/disease-service";
import { Diseases } from "../../../models/diseases";

@Component({
  selector: 'app-consult-verify',
  templateUrl: './verify-component.html'
})

export class ConsultVerifyComponent implements OnInit{
  currentIndex = 0;
  consultForm! : FormGroup
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
    private router: Router
  ) {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.divs.length
    },2000)
  }

  disease!: Diseases | null
  id!: string

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
  }

  onSubmit() {    
    this.router.navigate(['/consult/direct/payment'], {
      queryParams: {id: this.id }
    })
    //sending a request to backend for number verification
    // this.verifyService.verifyEmail(this.consultForm.value, this.disease).subscribe(
    //   (response) => {
    //     console.log('successfull');
        
    //   },
    //   (error) => {
    //     console.log(error)
    //   }
    // )
  }
}