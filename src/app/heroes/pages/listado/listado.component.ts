import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        /* This is better for small screens, once min() is better supported */
        /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
        gap: 1rem;
      }
    `,
  ],
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((resp) => (this.heroes = resp));
  }
}
