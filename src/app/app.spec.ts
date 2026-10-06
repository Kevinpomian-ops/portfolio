import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { App } from './app';
import { routes } from './app.routes';
import { Home } from './home/home';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes), provideTranslateService({ lang: 'en' })],
    })
      .compileComponents();
    TestBed.inject(TranslateService).setTranslation('en', {
      LANDING: {
        TITLE_FIRST: 'Full stack',
        TITLE_SECOND: 'Developer',
      },
      LEGAL: {
        PRIVACY: { TITLE: 'Privacy policy' },
        NOTICE: { TITLE: 'Legal notice' },
      },
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', Home);
    const compiled = harness.routeNativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Full stack');
  });

  it('should navigate between the legal pages through the router outlet', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/privacy-policy');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Privacy policy');

    await harness.navigateByUrl('/legal-notice');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Legal notice');
  });
});
