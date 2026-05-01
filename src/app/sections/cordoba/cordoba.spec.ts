import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cordoba } from './cordoba';

describe('Cordoba', () => {
  let component: Cordoba;
  let fixture: ComponentFixture<Cordoba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cordoba],
    }).compileComponents();

    fixture = TestBed.createComponent(Cordoba);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
