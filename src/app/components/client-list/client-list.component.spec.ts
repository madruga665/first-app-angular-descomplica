import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientListComponent } from './client-list.component';

describe('ListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render client list', () => {
    const testClients = [
      {
        name: 'Luciano',
        age: 37,
        id: '1',
        email: 'madruga665@gmail.com',
        password: '123456',
      },
    ];
    component.clientList = testClients;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const clientListItems = compiled.querySelectorAll('li');
    const client = compiled.querySelector('li')?.textContent?.trim();

    expect(clientListItems.length).toBe(testClients.length);
    expect(client).toBe('Luciano');
  });
});
