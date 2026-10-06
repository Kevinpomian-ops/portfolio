import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';

type LegalDocument = 'privacy' | 'notice';

interface LegalSection {
  title: string;
  paragraphs: string[];
}

const legalContent: Record<LegalDocument, { title: string; intro: string; sections: LegalSection[] }> = {
  privacy: {
    title: 'LEGAL.PRIVACY.TITLE',
    intro: 'LEGAL.PRIVACY.INTRO',
    sections: [
      { title: 'LEGAL.PRIVACY.CONTROLLER_TITLE', paragraphs: ['LEGAL.PRIVACY.CONTROLLER_TEXT'] },
      { title: 'LEGAL.PRIVACY.FORM_TITLE', paragraphs: ['LEGAL.PRIVACY.FORM_TEXT', 'LEGAL.PRIVACY.FORM_PURPOSE'] },
      { title: 'LEGAL.PRIVACY.LEGAL_BASIS_TITLE', paragraphs: ['LEGAL.PRIVACY.LEGAL_BASIS_TEXT'] },
      { title: 'LEGAL.PRIVACY.RECIPIENTS_TITLE', paragraphs: ['LEGAL.PRIVACY.RECIPIENTS_TEXT'] },
      { title: 'LEGAL.PRIVACY.RETENTION_TITLE', paragraphs: ['LEGAL.PRIVACY.RETENTION_TEXT'] },
      { title: 'LEGAL.PRIVACY.RIGHTS_TITLE', paragraphs: ['LEGAL.PRIVACY.RIGHTS_TEXT'] },
      { title: 'LEGAL.PRIVACY.OPEN_DETAILS_TITLE', paragraphs: ['LEGAL.PRIVACY.OPEN_DETAILS_TEXT'] },
    ],
  },
  notice: {
    title: 'LEGAL.NOTICE.TITLE',
    intro: 'LEGAL.NOTICE.INTRO',
    sections: [
      { title: 'LEGAL.NOTICE.PROVIDER_TITLE', paragraphs: ['LEGAL.NOTICE.PROVIDER_TEXT'] },
      { title: 'LEGAL.NOTICE.CONTACT_TITLE', paragraphs: ['LEGAL.NOTICE.CONTACT_TEXT'] },
      { title: 'LEGAL.NOTICE.CONTENT_TITLE', paragraphs: ['LEGAL.NOTICE.CONTENT_TEXT'] },
      { title: 'LEGAL.NOTICE.LIABILITY_TITLE', paragraphs: ['LEGAL.NOTICE.LIABILITY_TEXT'] },
    ],
  },
};

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-legal-page',
  styleUrl: './legal-page.scss',
  templateUrl: './legal-page.html',
})
export class LegalPage {
  private readonly route = inject(ActivatedRoute);
  private readonly document = toSignal(
    this.route.data.pipe(
      map(({ document }) => this.getDocument(document)),
    ),
    { initialValue: this.getDocument(this.route.snapshot.data['document']) },
  );

  readonly content = computed(() => legalContent[this.document()]);

  private getDocument(value: unknown): LegalDocument {
    if (value === 'privacy' || value === 'notice') {
      return value;
    }

    throw new Error(`Unknown legal document: ${String(value)}`);
  }
}
