import { CommonModule } from "@angular/common"
import { Component } from '@angular/core';
import { ISocialLink } from "../../interfaces/socialLink.interface"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public socialLinks: ISocialLink[] = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      svg: "assets/twitter.svg",
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      svg: "assets/instagram.svg",
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      svg: "assets/linkedin.svg",
    },
  ];
}
