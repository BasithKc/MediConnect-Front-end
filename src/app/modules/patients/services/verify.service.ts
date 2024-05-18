import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Diseases } from "../models/diseases";
import { Observable } from "rxjs";
import { ConsultForm } from "../models/consult-form";

@Injectable({
  providedIn: 'root'
})

export class VerifyService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:5000'// base usl

  verifyEmail(constultForm: ConsultForm , diseasType:Diseases | null): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/verify/email`, {constultForm, diseasType})
  }
}

