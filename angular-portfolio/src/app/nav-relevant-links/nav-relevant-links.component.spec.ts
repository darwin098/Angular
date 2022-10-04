import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRelevantLinksComponent } from './nav-relevant-links.component';

describe('NavRelevantLinksComponent', () => {
  let component: NavRelevantLinksComponent;
  let fixture: ComponentFixture<NavRelevantLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRelevantLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRelevantLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
