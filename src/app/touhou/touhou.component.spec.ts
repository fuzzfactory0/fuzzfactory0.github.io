import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouhouComponent } from './touhou.component';

describe('TouhouComponent', () => {
  let component: TouhouComponent;
  let fixture: ComponentFixture<TouhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouhouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
