import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import {  Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getcounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
   standalone: true,
  imports: [CommonModule],   // ✅ REQUIRED
  templateUrl: './counterdisplay.html',
  styleUrl: './counterdisplay.css',
})
export class Counterdisplay implements OnInit ,OnDestroy{
  constructor(private store: Store<{ counter:CounterModel}>) { }
  counterValue: any;
  channelName : any;
  countersubscribe!: Subscription;
  counter$ !: Observable<CounterModel>;

  ngOnInit() {
    this.countersubscribe = this.store.select(getcounter).subscribe((data) => {
      console.log("custom display");
      this.counterValue = data
     
     })
    //  this.counter$ = this.store.select('counter');
     
  }
  ngOnDestroy(): void {
    this.countersubscribe.unsubscribe();
  }

}
