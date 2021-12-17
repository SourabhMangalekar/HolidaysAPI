import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataViewComponent } from './api-data-view.component';

describe('ApiDataViewComponent', () => {
  let component: ApiDataViewComponent;
  let fixture: ComponentFixture<ApiDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
