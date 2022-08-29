import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePesertaComponent } from './vote-peserta.component';

describe('VotePesertaComponent', () => {
  let component: VotePesertaComponent;
  let fixture: ComponentFixture<VotePesertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotePesertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
