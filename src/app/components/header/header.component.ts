import { CommonModule } from "@angular/common"
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router"
import { IHeaderItem } from "../../interfaces/headerItem.interface"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  public shopName: string = "Games Shop"
  public headerItems: IHeaderItem[]  = [{
    name: "Home",
    link: "/home"
  }, {
    name: "Games",
    link: "/games"
  }, {
    name: "Cart",
    link: "/cart"
  }]
}
