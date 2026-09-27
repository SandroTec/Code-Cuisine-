import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeResultPage } from './recipe-result-page';

describe('RecipeResultPage', () => {
  let component: RecipeResultPage;
  let fixture: ComponentFixture<RecipeResultPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeResultPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeResultPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
