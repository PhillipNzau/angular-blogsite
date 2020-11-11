import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogPageComponent } from './new-blog-page.component';

describe('NewBlogPageComponent', () => {
  let component: NewBlogPageComponent;
  let fixture: ComponentFixture<NewBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBlogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
