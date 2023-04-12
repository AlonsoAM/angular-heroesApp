import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  constructor(private heroesService: HeroesService) {}

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    first_appearance: '',
  };
  guardar = () => {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    // console.log(this.heroe);
    this.heroesService
      .agregarHeroe(this.heroe)
      .subscribe((resp) => console.log(`respuesta:`, resp));
  };
}
