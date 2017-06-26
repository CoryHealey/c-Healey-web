import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulSunshineComponent } from './beautiful-sunshine.component';

describe('BeautifulSunshineComponent', () => {
  let component: BeautifulSunshineComponent;
  let fixture: ComponentFixture<BeautifulSunshineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautifulSunshineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautifulSunshineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
