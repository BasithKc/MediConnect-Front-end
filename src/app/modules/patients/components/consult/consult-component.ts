import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Diseases } from "../../models/diseases";
import { DiseaseService } from "../../services/disease-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-consult',
  templateUrl: './consult-component.html'
})

export class ConsultComponent implements OnInit{
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
    private formBuilder: FormBuilder
  ) {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.divs.length
    },2000)
  }

  disease!: Diseases| undefined | null


 //access the disease using id
 ngOnInit(): void {
  //extracting the id from queryparams
    this.route.queryParams.subscribe((query) => { 
      const id:string = query['id']
      
     this.disease =  this.diseaseService.getDiseaseById(Number(id))
     
    })

    //Creating a form validation 
    this.consultForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]]
    })
  }

  onSubmit() {
    //sending a request to backend for number verification
    
  }
}