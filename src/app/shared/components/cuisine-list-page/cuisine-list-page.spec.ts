import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineListPage } from './cuisine-list-page';

describe('CuisineListPage', () => {
  let component: CuisineListPage;
  let fixture: ComponentFixture<CuisineListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
