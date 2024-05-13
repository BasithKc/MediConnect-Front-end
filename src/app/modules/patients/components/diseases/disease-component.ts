import { Component, Input } from "@angular/core";
import { Diseases } from "../../models/diseases";

@Component({
  selector: 'app-disease-card',
  templateUrl: './disease-component.html'
})

export class DiseaseComponent {
 @Input() diseases!: Diseases[]
}