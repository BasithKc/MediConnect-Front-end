import { Component, OnInit } from '@angular/core';
import { FormStateService } from '../../../services/onboard-form-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './onboard-milestone.component.html',
  styleUrls: ['./onboard-milestone.component.css']
})
export class OnboardMilestoneComponent implements OnInit {
  formCompleted!: boolean

  constructor(private formStateService: FormStateService) { }

  ngOnInit(): void {
    //if form submition is completed setting formcompleted to true
    this.formStateService.formCompleted$.subscribe(
      (status: boolean) => {
        this.formCompleted = status
        console.log(this.formCompleted);

      }
    )
  }
}
