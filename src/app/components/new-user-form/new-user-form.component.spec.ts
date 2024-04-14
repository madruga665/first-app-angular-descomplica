import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserFormComponent } from './new-user-form.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewUserFormComponent', () => {
  let component: NewUserFormComponent;
  let fixture: ComponentFixture<NewUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewUserFormComponent],
      imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component).toBeTruthy();
  });
});
