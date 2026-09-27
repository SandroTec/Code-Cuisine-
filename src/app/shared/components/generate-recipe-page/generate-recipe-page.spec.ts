import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRecipePage } from './generate-recipe-page';

describe('GenerateRecipePage', () => {
  let component: GenerateRecipePage;
  let fixture: ComponentFixture<GenerateRecipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateRecipePage],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateRecipePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
