import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Myskills } from './myskills';

describe('Myskills', () => {
  let component: Myskills;
  let fixture: ComponentFixture<Myskills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myskills],
    }).compileComponents();

    fixture = TestBed.createComponent(Myskills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
