import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyutilitiesComponent } from './myutilities.component';

describe('MyutilitiesComponent', () => {
  let component: MyutilitiesComponent;
  let fixture: ComponentFixture<MyutilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyutilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyutilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
