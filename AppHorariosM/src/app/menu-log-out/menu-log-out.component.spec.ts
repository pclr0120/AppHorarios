import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogOutComponent } from './menu-log-out.component';

describe('MenuLogOutComponent', () => {
  let component: MenuLogOutComponent;
  let fixture: ComponentFixture<MenuLogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLogOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
