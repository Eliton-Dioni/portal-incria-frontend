import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilterComponent } from './new-filter.component';

describe('NewFilterComponent', () => {
  let component: NewFilterComponent;
  let fixture: ComponentFixture<NewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
