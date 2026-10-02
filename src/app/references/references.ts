import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-references',
  styleUrl: './references.scss',
  templateUrl: './references.html',
})
export class References {
  referencesLogo = 'assets/images/format_quote-solid.svg';
  references = [
    {
      name: '-',
      reference: 'comming soon',

    },
        {
      name: '-',
      reference: 'comming soon',

    },
        {
      name: '-',
      reference: 'comming soon',

    },
  ];
}
