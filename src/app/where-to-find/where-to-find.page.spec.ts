import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhereToFindPage } from './where-to-find.page';

describe('WhereToFindPage', () => {
  let component: WhereToFindPage;
  let fixture: ComponentFixture<WhereToFindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToFindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhereToFindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
