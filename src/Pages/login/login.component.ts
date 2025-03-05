import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
signup() {
window.location.replace('/signup');
}
  myForm!: FormGroup;
 
  constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
 
  get username() {
    return this.myForm.get('username');
  }
 
  get password() {
    return this.myForm.get('password');
  }
 
  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    }
  }
}
