import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-landinpage',
  styleUrl: './landinpage.scss',
  templateUrl: './landinpage.html',
})
export class Landinpage {}
