import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantATreePage } from './plant-a-tree.page';

describe('PlantATreePage', () => {
  let component: PlantATreePage;
  let fixture: ComponentFixture<PlantATreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantATreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantATreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
