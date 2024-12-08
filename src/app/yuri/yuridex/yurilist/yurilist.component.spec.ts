import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YurilistComponent } from './yurilist.component';

describe('YurilistComponent', () => {
  let component: YurilistComponent;
  let fixture: ComponentFixture<YurilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YurilistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YurilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
