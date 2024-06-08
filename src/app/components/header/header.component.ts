import { CommonModule } from "@angular/common"
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router"

interface HeaderItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  public shopName: string = "Games Shop"
  public headerItems: HeaderItem[]  = [{
    name: "Home",
    link: "/"
  }, {
    name: "Games",
    link: "/games"
  }, {
    name: "Cart",
    link: "/cart"
  }]
}
