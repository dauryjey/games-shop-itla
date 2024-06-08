import { CommonModule } from "@angular/common"
import { Component } from '@angular/core';

interface Game {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html'
})

export class GamesComponent {
  public games: Game[] = [{
    name: "Game 1",
    price: 9.99,
    description: "This is a description of Game 1."
  }, {
    name: "Game 2",
    price: 19.99,
    description: "This is a description of Game 2."
  }, {
    name: "Game 3",
    price: 29.99,
    description: "This is a description of Game 3."
  }]
}
