import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { TitleComponent } from './components/title/title.component';
import { DbzModule } from "../dbz/dbz.module";


@NgModule({

  declarations: [],
  imports:[CounterComponent,TitleComponent,DbzModule],
  exports:[CounterComponent,TitleComponent]
})
export class CounterModule{

}
