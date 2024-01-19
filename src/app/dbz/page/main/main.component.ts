import { Component, } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ListComponent,AddCharacterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private dbzservice:DbzService){
  }
  get characters(): Character[]{
    return this.dbzservice.characters
  }
  onDeleteCharacter(id:string): void{
    this.dbzservice.onDeleteCharacter(id)
  }
  addCharacter(character:Character) : void{
    this.dbzservice.addCharacter(character)
  }

}
