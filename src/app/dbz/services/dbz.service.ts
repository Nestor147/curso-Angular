import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [

    {
      id: uuid(),
      name: 'Gohan',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 6000,
    },
    {
      id: uuid(),
      name: 'Pikoro',
      power: 2000,
    },
  ];
    addCharacter(character:Character):void {
      const newCharacter:Character={id: uuid(), ...character}

      this.characters.push(newCharacter);
  
    }
    onDeleteCharacter(id:string):void {
      this.characters=this.characters.filter(e=>e.id !==id)
    }


  constructor() {
    
   }
}
