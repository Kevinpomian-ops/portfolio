import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LegalPage } from './legal-page/legal-page';

export const routes: Routes = [
  { path: '', component: Home, title: 'Kevin Pomian | Portfolio' },
  { path: 'privacy-policy', component: LegalPage, data: { document: 'privacy' }, title: 'Privacy Policy | Kevin Pomian' },
  { path: 'legal-notice', component: LegalPage, data: { document: 'notice' }, title: 'Legal Notice | Kevin Pomian' },
  { path: '**', redirectTo: '' },
];
