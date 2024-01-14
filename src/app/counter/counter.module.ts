import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { TitleComponent } from './components/title/title.component';


@NgModule({

  declarations: [],
  imports:[CounterComponent,TitleComponent],
  exports:[CounterComponent,TitleComponent]
})
export class CounterModule{

}
