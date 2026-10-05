import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-aboutme',
  styleUrl: './aboutme.scss',
  templateUrl: './aboutme.html',
})
export class Aboutme {}
