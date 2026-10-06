import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  selectedLanguage = 'EN';
  menuOpen = false;
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  async navigateToSection(event: MouseEvent, sectionId: string) {
    event.preventDefault();
    this.closeMenu();
    await this.router.navigate(['/'], { fragment: sectionId });
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      }
    });
  }

  setLanguage(language: 'en' | 'de') {
    this.selectedLanguage = language.toUpperCase();
    this.translate.use(language).subscribe({
      error: (error: unknown) => console.error(`Failed to load ${language} translations`, error),
    });
  }

  @HostListener('document:keydown.escape')
  closeMenuOnEscape() {
    this.closeMenu();
  }
}
