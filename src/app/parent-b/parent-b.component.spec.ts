import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBComponent } from './parent-b.component';

describe('ParentBComponent', () => {
  let component: ParentBComponent;
  let fixture: ComponentFixture<ParentBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentBComponent]
    });
    fixture = TestBed.createComponent(ParentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
