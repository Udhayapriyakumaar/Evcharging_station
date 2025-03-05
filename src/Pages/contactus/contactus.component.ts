import { Component ,AfterViewInit} from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-contactus',
  imports: [HeaderComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  phoneNumber: string = '9198946 30520';
  email: string = 'someone@example.com';
}
