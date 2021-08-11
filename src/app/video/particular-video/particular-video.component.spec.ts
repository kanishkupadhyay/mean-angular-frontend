import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularVideoComponent } from './particular-video.component';

describe('ParticularVideoComponent', () => {
  let component: ParticularVideoComponent;
  let fixture: ComponentFixture<ParticularVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
