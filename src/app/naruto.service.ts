import { Injectable } from '@angular/core';
import { NarutoCharacter } from './naruto';

@Injectable({
  providedIn: 'root',
})
export class NarutoService {
  url = 'https://narutodb.xyz/api/character';
  corsUrl = 'https://proxy.cors.sh/';

  async getAllNarutoCharacters(): Promise<NarutoCharacter[]> {
    const response = await fetch(this.corsUrl + this.url);
    const data = (await response.json()) ?? [];
    console.log(data);
    return data;
  }
}
