import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Diseases } from "src/app/modules/patients/models/diseases";

@Injectable({
  providedIn: 'root'
})

export class DiseaseService {
  //diseas data
  private diseases: Diseases[] = [
    {
      id: 1,
      name: 'Flu',
      description: 'The flu is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. Symptoms include fever, cough, sore throat, body aches, and fatigue.'
    },
    {
      id: 2,
      name: 'Diabetes',
      description: "Diabetes is a chronic condition characterized by high levels of blood glucose (sugar) due to the body's inability to produce or use insulin effectively. There are two main types: type 1 and type 2."
    },
    {
      id: 3,
      name: 'Asthma',
      description: 'Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to wheezing, shortness of breath, chest tightness, and coughing.'
    },
    {
      id: 4,
      name: 'Heart Disease',
      description: 'Heart disease refers to various conditions that affect the heart and blood vessels, including coronary artery disease, heart attack, and heart failure.'
    }
  ]

  getDieseases(): Observable<Diseases[]> {
    return of(this.diseases)
  }
}