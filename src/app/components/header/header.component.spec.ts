import { TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";


describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have the 'Primeiro app com angular' title`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;

    expect(app.headerTitle).toEqual('Primeiro app com angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h2')?.textContent).toContain('Primeiro app com angular');
  });
});
