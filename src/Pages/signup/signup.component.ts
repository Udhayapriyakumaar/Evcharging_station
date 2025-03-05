import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-signup',
  imports: [HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
login() {
  window.location.replace('/login');
}

}
