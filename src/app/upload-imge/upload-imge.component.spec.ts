import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImgeComponent } from './upload-imge.component';

describe('UploadImgeComponent', () => {
  let component: UploadImgeComponent;
  let fixture: ComponentFixture<UploadImgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
