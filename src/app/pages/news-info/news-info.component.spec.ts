import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInfoPageComponent } from './news-info.component';

describe('NewsInfoPageComponent', () => {
  let component: NewsInfoPageComponent;
  let fixture: ComponentFixture<NewsInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsInfoPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
