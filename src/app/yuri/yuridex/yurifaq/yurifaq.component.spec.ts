import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YurifaqComponent } from './yurifaq.component';

describe('YurifaqComponent', () => {
  let component: YurifaqComponent;
  let fixture: ComponentFixture<YurifaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YurifaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YurifaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
