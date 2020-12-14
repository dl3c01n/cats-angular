import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsComponentComponent } from './cats-component.component';

describe('CatsComponentComponent', () => {
  let component: CatsComponentComponent;
  let fixture: ComponentFixture<CatsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
