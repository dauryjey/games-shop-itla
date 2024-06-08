import { Routes } from '@angular/router';
import	{ GamesComponent } from './pages/games/games.component';
import { HomeComponent } from "./pages/home/home.component"

export const routes: Routes = [
	{ path: "games", component: GamesComponent },
	{ path: "home", component: HomeComponent },
	{ path: "cart", component: GamesComponent },
];
