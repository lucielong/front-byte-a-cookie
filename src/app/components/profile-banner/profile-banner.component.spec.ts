import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBannerComponent } from './profile-banner.component';

describe('ProfilBannerComponent', () => {
  let component: ProfileBannerComponent;
  let fixture: ComponentFixture<ProfileBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileBannerComponent]
    });
    fixture = TestBed.createComponent(ProfileBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
