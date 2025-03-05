import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotbookingsComponent } from './slotbookings.component';

describe('SlotbookingsComponent', () => {
  let component: SlotbookingsComponent;
  let fixture: ComponentFixture<SlotbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotbookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
