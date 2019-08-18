import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { QuoteB } from '../quote-b';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

newQuote = new QuoteB(0,"","",new Date(),0)
@Output() sendQuote = new EventEmitter<QuoteB>();
  
  addQuote(){
    this.sendQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
