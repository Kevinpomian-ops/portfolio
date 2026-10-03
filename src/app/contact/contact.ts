import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
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

  async submitSendMailForm() {
    if (this.sendMailForm.invalid) {
      this.sendMailForm.markAllAsTouched();
      return;
    }
    this.sendState = 'sending';
    try {
      // HIER DEINE DOMAIN EINTRAGEN
      const httpResponse = await fetch('https://deine-domain.de/sendMail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.senderName.value,
          email: this.email.value,
          message: this.message.value,
        }),
      });
      const result = await httpResponse.json();
      if (result.success) {
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