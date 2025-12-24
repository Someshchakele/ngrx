import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customerincrement } from '../../shared/store/counter.action';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getchannelname } from '../../shared/store/counter.selector';
@Component({
  selector: 'app-customercounter',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './customercounter.html',
  styleUrls: ['./customercounter.css'],
})

export class Customercounter {
  channelName: string ='';
 constructor(private store: Store<{ counter: CounterModel}>) { }
  counterInput!: number ;
  countersubscribe!: Subscription;
   
  
    ngOnInit() {
      this.countersubscribe = this.store.select(getchannelname).subscribe((data) => {
        console.log("custom counter");
        this.channelName = data
       })   
    }

    
  onIncrement() {
    this.store.dispatch(customerincrement({value: +this.counterInput}))
  }

}
