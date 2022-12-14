import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantLinksComponent } from './relevant-links.component';

describe('RelevantLinksComponent', () => {
  let component: RelevantLinksComponent;
  let fixture: ComponentFixture<RelevantLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevantLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevantLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
