import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowFooterComponent } from './below-footer.component';

describe('BelowFooterComponent', () => {
  let component: BelowFooterComponent;
  let fixture: ComponentFixture<BelowFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
