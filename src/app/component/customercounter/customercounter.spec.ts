import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customercounter } from './customercounter';

describe('Customercounter', () => {
  let component: Customercounter;
  let fixture: ComponentFixture<Customercounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customercounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customercounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
