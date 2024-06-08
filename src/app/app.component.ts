import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { HomeComponent } from "./pages/home/home.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'games-shop';
}
