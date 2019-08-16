export class QuoteB {
    showQuote:boolean;
  constructor(public id:number,public username:string,public quoteDesc: string,public postenOn:Date,public upVote:number ){
    this.showQuote = false;
  }
}
