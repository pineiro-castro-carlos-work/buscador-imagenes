import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorUnsplashComponent } from './buscador-unsplash.component';

describe('BuscadorUnsplashComponent', () => {
  let component: BuscadorUnsplashComponent;
  let fixture: ComponentFixture<BuscadorUnsplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorUnsplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorUnsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
