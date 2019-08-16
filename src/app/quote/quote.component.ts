import { Component, OnInit } from '@angular/core';
import { QuoteB } from '../quote-b'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  count = 0;
  quotes : QuoteB[] =[
    new QuoteB(1,"John Doe","The sweet Medicine for stress Is Jesus",new Date(2019,7,15),this.count)
  ]
  constructor() { }

  ngOnInit() {
  }

}