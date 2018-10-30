import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDispComponent } from './info-disp.component';

describe('InfoDispComponent', () => {
  let component: InfoDispComponent;
  let fixture: ComponentFixture<InfoDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
