import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivSkillSectionComponent } from './indiv-skill-section.component';

describe('IndivSkillSectionComponent', () => {
  let component: IndivSkillSectionComponent;
  let fixture: ComponentFixture<IndivSkillSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivSkillSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndivSkillSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
