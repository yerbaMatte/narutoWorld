import { Component, inject } from '@angular/core';
import { NarutoService } from './naruto.service';
import { NarutoCharacter } from './naruto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'narutoWorld';
  narutoCharactersList: NarutoCharacter[] = [];
  narutoService: NarutoService = inject(NarutoService);

  constructor() {
    this.narutoService
      .getAllNarutoCharacters()
      .then((data: NarutoCharacter[]) => {
        this.narutoCharactersList = data;
      });
    console.log(this.narutoCharactersList);
  }
}
