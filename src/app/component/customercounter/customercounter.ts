import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customerincrement } from '../../shared/store/counter.action';
import { CounterModel } from '../../shared/store/counter.model';
@Component({
  selector: 'app-customercounter',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './customercounter.html',
  styleUrls: ['./customercounter.css'],
})

export class Customercounter {
 constructor(private store: Store<{ counter: CounterModel}>) { }
  counterInput!: number ;

  onIncrement() {
    this.store.dispatch(customerincrement({value: +this.counterInput}))
  }

}
