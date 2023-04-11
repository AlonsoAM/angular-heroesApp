import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent {
  termino: string = '';
  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  buscando = () => {
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  };

  opcionSeleccionada = (event: MatAutocompleteSelectedEvent) => {
    if (!event.option.value) {
      // console.log('No hay valor');
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService
      .getHeroePorId(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
    // console.log(this.termino);
  };
}
