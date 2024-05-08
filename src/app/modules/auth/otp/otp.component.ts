import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements AfterViewInit {

  @Input() emailName!: string

  input01:string = ''
  input02:string = ''
  input03:string = ''
  input04:string = ''

  otpForm!: FormGroup

  @Output() otpSubmited = new EventEmitter<string>(); //Emitted after user submitted the otp
  @Output() otpCancelled = new EventEmitter() //if user clicked on close button

  @ViewChild('input1') input1!: ElementRef

  ngAfterViewInit(): void {
    this.input1.nativeElement.focus()
  }

  //Fucntion for handling on every key released if so it focus to next input
  handleKeyUp(event: KeyboardEvent,  nextInput: HTMLInputElement | null): void {
    if (event.key.match(/^[0-9]$/)) {
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  //Funcion for handling on every key press if so it will check if it is backspace
  handleKeyDown(event: KeyboardEvent, currentInput:HTMLInputElement): void {
    if (event.key === 'Backspace' &&  currentInput.value === '') {
      const previousInput = this.getPreviousInput(currentInput)
      if(previousInput) {
        previousInput.nativeElement.focus()
      }
    }
  }

  //Function to move to the previous Input element
  getPreviousInput(currentInput: HTMLInputElement): ElementRef<any> | null {
    const inputs = document.querySelectorAll('.otp-input');
    const currentIndex = Array.from(inputs).indexOf(currentInput)
    const previousElement = currentIndex > 0 ? inputs[currentIndex - 1] : null

    if (previousElement) {
      return new ElementRef(previousElement)
    }

    return null
  }

  onSubmit() {
    const otpEntered = `${this.input01}${this.input02}${this.input03}${this.input04}`
    this.otpSubmited.emit(otpEntered)
  }

}
