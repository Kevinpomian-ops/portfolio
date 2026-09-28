import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Landinpage } from './landinpage/landinpage';
import { Aboutme } from './aboutme/aboutme';
import { Myskills } from './myskills/myskills';

@Component({
  imports: [RouterOutlet, Header, Landinpage, Aboutme, Myskills],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
