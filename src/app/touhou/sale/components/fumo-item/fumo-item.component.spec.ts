import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumoItemComponent } from './fumo-item.component';

describe('FumoItemComponent', () => {
  let component: FumoItemComponent;
  let fixture: ComponentFixture<FumoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
