import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactDialogComponentComponent } from './add-contact-dialog-component.component';

describe('AddContactDialogComponentComponent', () => {
  let component: AddContactDialogComponentComponent;
  let fixture: ComponentFixture<AddContactDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactDialogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
