import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FormStateService {
  private formCompletedState = new BehaviorSubject<boolean>(this.getFormCompletedFromStorage());

  formCompleted$ = this.formCompletedState.asObservable()
  private formData: any = {}
  private baseUrl = 'http://localhost:5000'//base url for api request 


  constructor(private http: HttpClient) { }

  // Update the formData object by merging it with the provided data
  updateForm(data: any) {
    // Use the spread operator to create a new object with the combined properties
    this.formData = { ...data, ...this.formData }
  }

  getFormCompletedFromStorage(): boolean {
    const formState = localStorage.getItem('formCompleted')
    console.log('formstate', formState);

    return formState ? JSON.parse(formState) : false
  }

  //function for showing the form submition is completed
  setFormCompleted(status: boolean) {
    this.formCompletedState.next(status)
    localStorage.setItem('formCompleted', JSON.stringify(status))
  }

  // Submit the formData to the specified endpoint using HTTP POST
  submitFormData(endpoint: string): Observable<any> {
    // Construct the full URL by concatenating the base URL with the endpoint
    const token = localStorage.getItem('token')
    return this.http.post(`${this.baseUrl}/${endpoint}`, { formData: this.formData, token })
  }
}