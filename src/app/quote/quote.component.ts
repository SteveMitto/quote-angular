import { Component, OnInit } from '@angular/core';
import { QuoteB } from '../quote-b'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  showForm:boolean=false
  count = 0;
  countDown =0;
  quotes : QuoteB[] =[
    new QuoteB(1,"John Doe","Somebody","Jesus is the answer for the world today",new Date(2019,7,15),this.count,this.countDown),
    new QuoteB(2,"John Doe","SomeOne","Procastination is the thief of time",new Date(2019,7,15),this.count,this.countDown)

  ]

  showDetails(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }
  addUpvote(index){

    this.quotes[index].upVote = this.quotes[index].count+=1;

  }
  addDownVote(index){

    this.quotes[index].downVote = this.quotes[index].countDown+=1;

  }
  displayQuote(bool:boolean){
    this.showForm = !this.showForm
  }
  calcUpest(){
    for(var i=0;i<this.quotes.length;i++){
        if(this.quotes[i] >  this.quotes[i+1] ){
          return i;
          console.log(i);
        }
    }
  }
  addedQuote(quote){
    // alert("The problem is at the quote .ts")
    let quoteLength = this.quotes.length;
    quote.id =quoteLength +1;
    quote.postenOn=new Date();
    this.quotes.push(quote)
    this.showForm = !this.showForm
  }
  deletedQuote(delQuote,index){
    this.quotes.splice(index,1);
  }
  constructor() {
    this.calcUpest()
}
  ngOnInit() {
  }

}
