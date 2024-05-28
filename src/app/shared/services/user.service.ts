import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://localhost:5000'//base url for api request 
  private userInfoSubject = new BehaviorSubject<User | null>(null);
  userInfo$ = this.userInfoSubject.asObservable()

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token')
    if (token) {
      const headers = { 'Authorization': `${token}` };
      return this.http.post<User>(`${this.baseUrl}/auth/me`, {headers}).pipe(
        tap((user) => {
          this.userInfoSubject.next(user)
        })
      )
    }
    return new  Observable<any> () // Return an empty observable if no token is available
  }
  
}