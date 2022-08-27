import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilmsFormComponent } from './search-films-form.component';

describe('SearchFilmsFormComponent', () => {
  let component: SearchFilmsFormComponent;
  let fixture: ComponentFixture<SearchFilmsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilmsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilmsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
