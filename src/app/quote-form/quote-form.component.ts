import { Component, OnInit } from '@angular/core';
import { QuoteB } from '../quote-b';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

newQuote = new QuoteB(0,"","",new Date(),0)

  constructor() { }

  ngOnInit() {
  }

}
