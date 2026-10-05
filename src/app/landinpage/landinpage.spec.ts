import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { Landinpage } from './landinpage';

describe('Landinpage', () => {
  let component: Landinpage;
  let fixture: ComponentFixture<Landinpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landinpage],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(Landinpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
