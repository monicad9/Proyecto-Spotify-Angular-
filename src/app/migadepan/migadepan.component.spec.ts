/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MigadepanComponent } from './migadepan.component';

describe('MigadepanComponent', () => {
  let component: MigadepanComponent;
  let fixture: ComponentFixture<MigadepanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigadepanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigadepanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
