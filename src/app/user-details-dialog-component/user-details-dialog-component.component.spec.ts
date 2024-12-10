import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsDialogComponentComponent } from './user-details-dialog-component.component';

describe('UserDetailsDialogComponentComponent', () => {
  let component: UserDetailsDialogComponentComponent;
  let fixture: ComponentFixture<UserDetailsDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
