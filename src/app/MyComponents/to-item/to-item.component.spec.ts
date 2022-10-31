import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToItemComponent } from './to-item.component';

describe('ToItemComponent', () => {
  let component: ToItemComponent;
  let fixture: ComponentFixture<ToItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
