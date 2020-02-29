import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContactComponent } from './slider-contact.component';

describe('SliderContactComponent', () => {
  let component: SliderContactComponent;
  let fixture: ComponentFixture<SliderContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
