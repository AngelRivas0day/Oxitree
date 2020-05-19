import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootprintPage } from './footprint.page';

describe('FootprintPage', () => {
  let component: FootprintPage;
  let fixture: ComponentFixture<FootprintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
