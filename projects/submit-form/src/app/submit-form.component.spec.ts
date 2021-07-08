import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubmitFormComponent } from './submit-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SubmitFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubmitFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'submit-form'`, () => {
    const fixture = TestBed.createComponent(SubmitFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('submit-form');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SubmitFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('submit-form app is running!');
  });
});
