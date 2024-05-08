import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if(control instanceof FormGroup){
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    
    if(password && confirmPassword) {
      
      return password.value === confirmPassword.value ? null : {passwordMismatch: true}
    }
    
  }
  return null;
}