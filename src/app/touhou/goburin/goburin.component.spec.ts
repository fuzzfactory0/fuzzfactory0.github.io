import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoburinComponent } from './goburin.component';

describe('GoburinComponent', () => {
  let component: GoburinComponent;
  let fixture: ComponentFixture<GoburinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoburinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoburinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
