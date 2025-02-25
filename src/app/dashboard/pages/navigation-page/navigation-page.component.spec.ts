import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavigationPageComponent } from './navigation-page.component';

describe('NavigationPageComponent', () => {
  let component: NavigationPageComponent;
  let fixture: ComponentFixture<NavigationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
