import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-myprojects',
  styleUrl: './myprojects.scss',
  templateUrl: './myprojects.html',
})
export class Myprojects {
  projects = [
    {
      title: 'Join',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: 'assets/join.png',
      link: '...'
    },
    {
      title: 'EL-POLLO-LOCO',
      tech: 'Canvas | HTML | CSS | JavaScript',
      text: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: 'assets/pollo_loco.png',
      link: '...'
    },
    {
      title: 'Fotogram',
      tech: ' HTML | CSS ',
      text: 'A curated photo collection themed around Japan. Built with a grid layout using only HTML and CSS.',
      img: 'assets/fotogram.png',
      link: '...'
    },
    {
      title: 'Pokedex',
      tech: 'JavaScript | HTML | CSS | API',
      text: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      img: 'assets/pokedex.png',
      link: '...'
    },
  ];
}
