import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render client list', () => {
    const testClients = [{ name: 'Luciano', age: 37 }];
    component.clientList = testClients;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const clientListItems = compiled.querySelectorAll('li');
    const client = compiled.querySelector('li')?.textContent?.trim()

    expect(clientListItems.length).toBe(testClients.length);
    expect(client).toBe('Luciano');
  });
});
