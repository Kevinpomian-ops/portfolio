import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  selectedLanguage = 'EN';
  private readonly translate = inject(TranslateService);

  setLanguage(language: 'en' | 'de') {
    this.selectedLanguage = language.toUpperCase();
    this.translate.use(language).subscribe({
      error: (error: unknown) => console.error(`Failed to load ${language} translations`, error),
    });
  }
}
