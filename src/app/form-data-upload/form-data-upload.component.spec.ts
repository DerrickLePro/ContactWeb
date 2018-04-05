import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataUploadComponent } from './form-data-upload.component';

describe('FormDataUploadComponent', () => {
  let component: FormDataUploadComponent;
  let fixture: ComponentFixture<FormDataUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
