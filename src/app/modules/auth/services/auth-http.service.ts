import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor (
    private http: HttpClient
  ) {}

  private baseUrl = 'http://localhost:5000'//base url for api request 

  //function for hadnling signup datas
  signup(signupForm: SignupData, userType: string): Observable<signupResponse> {
   return this.http.post<signupResponse>(`${this.baseUrl}/auth/signup/${userType}`,signupForm )
  }

  //function for verifying otp
  verifyOtp (otp: string, userId: string): Observable<any> {
    return this.http.post<OtpVerify>(`${this.baseUrl}/auth/verify-otp`, {otpValue: otp, userId} )
  }

  //function for handling login attempt
  login (loginForm: LoginData): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, loginForm)
  }
}

interface SignupData {
  name: string,
  email: string,
  password: string
}

//Modle of signup response
interface signupResponse{
  message: string,
  userId: string
}

//Model OTP verification response with JWT token
interface OtpVerify{
  token : string;
}

//login form
interface LoginData{
  email: string,
  password: string
}