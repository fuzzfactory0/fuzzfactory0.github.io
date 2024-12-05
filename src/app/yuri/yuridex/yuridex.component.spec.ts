import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuridexComponent } from './yuridex.component';

describe('YuridexComponent', () => {
  let component: YuridexComponent;
  let fixture: ComponentFixture<YuridexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuridexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuridexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
