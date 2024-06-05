import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FormStateService {
  private formData: any = {}
  private baseUrl = 'http://localhost:5000'//base url for api request 


  constructor(private http: HttpClient) {}

  // Update the formData object by merging it with the provided data
  updateForm (data: any) {
    // Use the spread operator to create a new object with the combined properties
    console.log(this.formData);
    this.formData = {...this.formData, ...data}
    
  }

  // Return the current formData object
  getFormData () {
    return this.formData
  }

  // Submit the formData to the specified endpoint using HTTP POST
  submitFormData (endpoint: string): Observable<any> {
    
    // Construct the full URL by concatenating the base URL with the endpoint
    return this.http.post(`${this.baseUrl}/${endpoint}`, this.formData)
  }
}