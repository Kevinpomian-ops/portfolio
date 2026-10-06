import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-myprojects',
  styleUrl: './myprojects.scss',
  templateUrl: './myprojects.html',
})
export class Myprojects {
  projects = [
    {
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      text: 'PROJECTS.JOIN_DESCRIPTION',
      img: 'assets/join.png',
      link: '...'
    },
    {
      title: 'EL-POLLO-LOCO',
      tech: 'Canvas | HTML | CSS | JavaScript',
      text: 'PROJECTS.POLLO_DESCRIPTION',
      img: 'assets/pollo_loco.png',
      link: 'https://github.com/Kevinpomian-ops/pollo-locco'
    },
    {
      title: 'Fotogram',
      tech: ' HTML | CSS ',
      text: 'PROJECTS.FOTOGRAM_DESCRIPTION',
      img: 'assets/fotogram.png',
      link: 'https://github.com/Kevinpomian-ops/Fotogram'
    },
    {
      title: 'Pokedex',
      tech: 'JavaScript | HTML | CSS | API',
      text: 'PROJECTS.POKEDEX_DESCRIPTION',
      img: 'assets/pokedex.png',
      link: 'https://github.com/Kevinpomian-ops/pokedex'
    },
  ];
}
