import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPage } from './main.page';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPage],
      // Agrega otras dependencias necesarias aquí
    }).compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega pruebas adicionales si es necesario
});
