import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-myskills',
  styleUrl: './myskills.scss',
  templateUrl: './myskills.html',
})
export class Myskills {
  skill_list = [
    {
      skill: "Angular",
      img_path: "/assets/skills/Property 1=Angular.svg"
    },
    {
      skill: "TypeScript",
      img_path: "/assets/skills/Property 1=Typescript.svg"
    },
    {
      skill: "JavaScript",
      img_path: "/assets/skills/Property 1=JavScript.svg"
    },
    {
      skill: "HTML",
      img_path: "/assets/skills/Property 1=html.svg"
    },
    {
      skill: "CSS",
      img_path: "/assets/skills/Property 1=css.svg"
    },
    {
      skill: "Git",
      img_path: "/assets/skills/Property 1=Git.svg"
    },
    {
      skill: "REST-API",
      img_path: "/assets/skills/Property 1=Api.svg"
    },
  ]
}
