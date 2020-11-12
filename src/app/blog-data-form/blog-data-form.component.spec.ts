import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDataFormComponent } from './blog-data-form.component';

describe('BlogDataFormComponent', () => {
  let component: BlogDataFormComponent;
  let fixture: ComponentFixture<BlogDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
