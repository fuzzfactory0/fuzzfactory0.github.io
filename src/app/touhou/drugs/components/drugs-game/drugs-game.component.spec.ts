import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsGameComponent } from './drugs-game.component';

describe('DrugsGameComponent', () => {
  let component: DrugsGameComponent;
  let fixture: ComponentFixture<DrugsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
