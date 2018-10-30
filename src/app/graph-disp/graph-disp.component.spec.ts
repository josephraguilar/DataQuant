import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDispComponent } from './graph-disp.component';

describe('GraphDispComponent', () => {
  let component: GraphDispComponent;
  let fixture: ComponentFixture<GraphDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
