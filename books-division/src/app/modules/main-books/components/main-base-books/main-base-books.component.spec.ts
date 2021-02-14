import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBaseBooksComponent } from './main-base-books.component';

describe('MainBaseBooksComponent', () => {
  let component: MainBaseBooksComponent;
  let fixture: ComponentFixture<MainBaseBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBaseBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBaseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
