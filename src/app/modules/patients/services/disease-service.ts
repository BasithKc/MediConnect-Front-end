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
      name: 'Dermentology',
      description: 'The flu is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and lungs. Symptoms include fever, cough, sore throat, body aches, and fatigue.',
      image: '../../../../../assets/images/dieseases/doctor-injecting-patient-high-angle_11zon.jpg'
    },
    {
      id: 2,
      name: 'Internal Medicine',
      description: "Diabetes is a chronic condition characterized by high levels of blood glucose (sugar) due to the body's inability to produce or use insulin effectively. There are two main types: type 1 and type 2.",
      image: '../../../../../assets/images/dieseases/internal dieseas.jpg'
    },
    {
      id: 3,
      name: 'Neurology',
      description: 'Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to wheezing, shortness of breath, chest tightness, and coughing.',
      image: '../../../../../assets/images/dieseases/human-brain_11zon.jpg'
    },
    {
      id: 4,
      name: 'General Medicine',
      description: 'Heart disease refers to various conditions that affect the heart and blood vessels, including coronary artery disease, heart attack, and heart failure.',
      image: '../../../../../assets/images/dieseases/general_11zon.jpg'
    },
    {
      id: 5,
      name: 'Dentisty',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite (2)_11zon.jpg'
    },
    {
      id: 6,
      name: 'Otolaryngology',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/clueless-young-brunette-caucasian-girl-holds-hand-ear-orange_11zon.jpg'
    },
    {
      id: 7,
      name: 'HIV/AIDS',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/crop-hands-with-myeloma-symbol_11zon.jpg'
    },
    {
      id: 8,
      name: 'Urology',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/urology_11zon.jpg'
    },
    {
      id: 9,
      name: 'Allergy',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/young-woman-with-allergy-sneezing-girl-feeling-sick-having-runny-nose_11zon.jpg'
    },
    {
      id: 10,
      name: 'Paediatrics',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/paediriactic.jpg'
    },
    {
      id: 11,
      name: 'Gastroeterology',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/gaestor.jfif'
    },
    {
      id: 12,
      name: 'Infectous Disease',
      description: 'teeth disease refers to various conditions that affect the teeth and enamuls',
      image: '../../../../../assets/images/dieseases/infection.jfif'
    }
  ]

  getDieseases(): Observable<Diseases[]> {
    return of(this.diseases)
  }

  //Get a disease by passing id from query params
  getDiseaseById (id: number) {   
    const disease =  this.diseases.find(disease => disease.id === id)
    console.log(disease);
    if(disease) {
      return disease //return the object of disease
    } else {
      console.warn('No disease found for this id')
      return null
    }
  }
}