import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ConsultHttpService {
  constructor(private http: HttpClient) { }

  //Get the user token
  getUserId() {
    const token =  localStorage.getItem('token')
    return token
  }
  //Get the doctors details 
  findDocById(id: string): Observable<any> {
    return this.http.get('http://localhost:5000/consult/doctor/' + id);
  }

  //Function for creating a new appointment
  createAppointment(date: Date, time: string, doctorId: string, userToken: string | null): Observable<any> {
    return this.http.post('http://localhost:5000/consult/create/appointment', {doctorId, userToken, appointmentDetails: {date, time}})
  }
}