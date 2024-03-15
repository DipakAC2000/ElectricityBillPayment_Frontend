import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyConnectionComponent } from './apply-connection.component';

describe('ApplyConnectionComponent', () => {
  let component: ApplyConnectionComponent;
  let fixture: ComponentFixture<ApplyConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyConnectionComponent]
    });
    fixture = TestBed.createComponent(ApplyConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
