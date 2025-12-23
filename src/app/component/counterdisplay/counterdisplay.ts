import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  imports: [],
  templateUrl: './counterdisplay.html',
  styleUrl: './counterdisplay.css',
})
export class Counterdisplay implements OnInit {
  counterValue= 0
   constructor(private store: Store<{ counter: { counter: any } }>) { }


   ngOnInit() {
     this.store.select('counter').subscribe((data)=>{
      this.counterValue = data.counter
     })
   }

}
