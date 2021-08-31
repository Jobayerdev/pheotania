/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebouncePetTypeSelectFieldComponent } from './debounce-pet-type-select-field.component';

describe('DebouncePetTypeSelectFieldComponent', () => {
  let component: DebouncePetTypeSelectFieldComponent;
  let fixture: ComponentFixture<DebouncePetTypeSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncePetTypeSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncePetTypeSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
