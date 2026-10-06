import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  sendState: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  sendMailForm = new FormGroup({
    senderName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    privacy: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
  });

  get senderName() {
    return this.sendMailForm.controls.senderName;
  }

  get email() {
    return this.sendMailForm.controls.email;
  }

  get message() {
    return this.sendMailForm.controls.message;
  }

  get privacy() {
    return this.sendMailForm.controls.privacy;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async submitSendMailForm() {
    if (this.sendMailForm.invalid) {
      this.sendMailForm.markAllAsTouched();
      return;
    }
    this.sendState = 'sending';
    try {
      const httpResponse = await fetch('/sendMail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.senderName.value,
          email: this.email.value,
          message: this.message.value,
        }),
      });

      const result: { success?: boolean } = await httpResponse.json();
      if (httpResponse.ok && result.success === true) {
        this.sendState = 'success';
        this.sendMailForm.reset();
      } else {
        this.sendState = 'error';
      }
    } catch {
      this.sendState = 'error';
    }
  }
}