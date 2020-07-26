import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingTComponent } from './property-binding-t.component';

describe('PropertyBindingTComponent', () => {
  let component: PropertyBindingTComponent;
  let fixture: ComponentFixture<PropertyBindingTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindingTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
