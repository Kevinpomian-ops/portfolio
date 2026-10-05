import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  referencesLogo = 'assets/format_quote.svg';
  references = [
    {
      name: '-',
      reference: 'REFERENCES.COMING_SOON',

    },
        {
      name: '-',
      reference: 'REFERENCES.COMING_SOON',

    },
        {
      name: '-',
      reference: 'REFERENCES.COMING_SOON',

    },
  ];
}
