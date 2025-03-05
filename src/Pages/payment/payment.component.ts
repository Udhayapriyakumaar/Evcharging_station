import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../Component/header/header.component";

@Component({
  selector: 'app-payment',
  imports: [HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  username: string = 'Ram';
  date: string = new Date().toLocaleDateString();
  time: string = new Date().toLocaleTimeString();
  slot: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.slot = params['slot'] || 'N/A';
    });
  }

  processPayment() {
    alert('Payment Successful');
    this.router.navigate(['/']);
  }
}
