import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogggedIn (): boolean {
    const token = localStorage.getItem('token')
    return !!token // Returns true if token exists, false otherwise
  }
}