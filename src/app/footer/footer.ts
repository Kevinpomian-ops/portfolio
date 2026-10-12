import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  private readonly router = inject(Router);

  async navigateHome(event: MouseEvent) {
    event.preventDefault();
    await this.router.navigateByUrl('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
