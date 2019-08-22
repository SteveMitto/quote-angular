import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteDate'
})
export class QuoteDatePipe implements PipeTransform {

  transform(value: number ): any{
  let today:Date = new Date(); //get current date and time
   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
   var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
   const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
   var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
   var dateCounter = dateDifferenceSeconds/secondsInDay;

   // if (dateCounter >= 1 && value > todayWithNoTime){
   //   return dateCounter;
   // }else{
   //   return "Today";
   // }

   if(dateCounter >= 1 || value > todayWithNoTime){
     let final = dateCounter+ " days Ago";
     if(dateCounter > 30){

       if(dateCounter > 60){

          if (dateCounter > 90) {

            if (dateCounter > 120) {

              if (dateCounter > 150) {

                if (dateCounter > 180) {

                  if (dateCounter > 220) {

                    if (dateCounter > 350) {

                      if (dateCounter > 380) {

                        if (dateCounter > 420) {

                          if (dateCounter > 450) {

                            if (dateCounter > 480) {
                              return "1 Year Ago "
                            }
                            return "11 months Ago"
                          }
                          return "10 months Ago"
                        }
                        return "9 months Ago"
                      }
                      return "8 months Ago"
                    }
                    return "7 months Ago"
                  }
                  return "6 months Ago"
                }
                return "5 months Ago"
              }
              return "4 months Ago"
            }
            return "3 months Ago"
          }
    return "2 months Ago"
  }
   return "1 month Ago";
  }
  return "Today";
    }
   else{
     return "Today"
  }
}
}
