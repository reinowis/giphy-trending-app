import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyHomeComponent } from './giphy-home.component';

describe('GiphyHomeComponent', () => {
  let component: GiphyHomeComponent;
  let fixture: ComponentFixture<GiphyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
