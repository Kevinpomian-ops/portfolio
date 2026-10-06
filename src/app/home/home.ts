import { Component } from '@angular/core';
import { Aboutme } from '../aboutme/aboutme';
import { Contact } from '../contact/contact';
import { Landinpage } from '../landinpage/landinpage';
import { Myskills } from '../myskills/myskills';
import { Myprojects } from '../myprojects/myprojects';
import { References } from '../references/references';

@Component({
  imports: [Landinpage, Aboutme, Myskills, Myprojects, References, Contact],
  selector: 'app-home',
  template: `
    <app-landinpage></app-landinpage>
    <app-aboutme></app-aboutme>
    <app-myskills></app-myskills>
    <app-myprojects></app-myprojects>
    <app-references></app-references>
    <app-contact></app-contact>
  `,
})
export class Home {}
