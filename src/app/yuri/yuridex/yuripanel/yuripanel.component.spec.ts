import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuripanelComponent } from './yuripanel.component';

describe('YuripanelComponent', () => {
  let component: YuripanelComponent;
  let fixture: ComponentFixture<YuripanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuripanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuripanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
