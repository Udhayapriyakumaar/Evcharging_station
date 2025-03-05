import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../Component/header/header.component';

@Component({
  selector: 'app-slotbookings',
  imports: [FormsModule,RouterLink],
  templateUrl: './slotbookings.component.html',
  styleUrl: './slotbookings.component.css'
})
export class SlotbookingsComponent {
  constructor(private router: Router) {}

  slots = [
    { id: 'A1', status: 'available' }, { id: 'A2', status: 'available' },
    { id: 'B1', status: 'available' }, { id: 'B2', status: 'booked' },
    { id: 'C1', status: 'booked' }, { id: 'C2', status: 'booked' },
    { id: 'D1', status: 'available' }, { id: 'D2', status: 'booked' }
  ];

  handleSlotClick(slot: any) {
    if (slot.status === 'available') {
      this.router.navigate(['/payment']);
    } else {
      alert('This slot is already booked!');
    }
  }
}
