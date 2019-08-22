export class QuoteB {
    showQuote:boolean;
    count:number;
    countDown:number;

  constructor(public id:number,public username:string ,public author:string ,public description: string,public postenOn:Date,public upVote:number , public downVote:number){
    this.showQuote = false;
    this.count = 0;
    this.countDown = 0;

  }
}
