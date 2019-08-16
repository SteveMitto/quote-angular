export class QuoteB {
    showQuote:boolean;
  constructor(public id:number,public username:string,public description: string,public postenOn:Date,public upVote:number ){
    this.showQuote = false;
  }
}
