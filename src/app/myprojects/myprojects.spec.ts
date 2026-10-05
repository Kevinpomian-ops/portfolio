import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Myprojects } from './myprojects';

describe('Myprojects', () => {
  let component: Myprojects;
  let fixture: ComponentFixture<Myprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myprojects],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Myprojects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
