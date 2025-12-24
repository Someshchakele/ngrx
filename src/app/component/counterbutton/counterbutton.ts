import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changechannelname, decrement, increment, reset } from '../../shared/store/counter.action';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counterbutton.html',
  styleUrls: ['./counterbutton.css'],
})
export class Counterbutton {
  constructor(private store: Store<{ counter: { counter: any } }>) { }

  onIncrement() {
    this.store.dispatch(increment())

  }
  onDecrement() {
     this.store.dispatch(decrement())
  }
  onReset() {
     this.store.dispatch(reset())
  }
  onRename(){
    this.store.dispatch(changechannelname({channel:'New Channel Name'}))
  }

}
